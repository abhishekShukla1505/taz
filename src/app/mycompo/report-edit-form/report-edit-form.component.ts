import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Sharedata } from '../welcom/sharedata';

@Component({
  selector: 'app-report-edit-form',
  templateUrl: './report-edit-form.component.html',
  styleUrls: ['./report-edit-form.component.css'],
  styles:[`[defalut]{defalut:"thisisme"}`]
})
export class ReportEditFormComponent implements OnInit, AfterViewInit {

  grossSalary:any;
  total_exemtion:any;
  taxableIncome:any;
  taxPercent:any;
  tax:any;
 static _grossSalary:any;
 static _total_exemtion:any;
 static _taxableIncome:any;
 static _taxPercent:any;
 static _tax:any;
 static flag=0;

  @ViewChild('title')
  input!: ElementRef;
  testing="wotksioahs"
  data:any=[];
  constructor(private element: ElementRef, 
    private renderer: Renderer2,private http:HttpClient,private router:Router) {
     
     

      this.http.post("https://webapi20211205161736.azurewebsites.net/api/getAccountlist",{            
      userId:Sharedata.id,
      accountId:Sharedata.editDataId
    }).subscribe((d:any)=>{    
      
      this.data=d;
     
      
    });
     }
  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.input.nativeElement, 'defalut', '58697458');
  }
  ngOnInit(): void {
    
  }
  Calculate(_title:any,_BS:any,_DA:any,_HRA:any,_LTA:any,_MA:any,_BPA:any,_TDSE:any,_HRAE:any,_STE:any,_TE:any,_ELE:any,_PFE:any,_FDE:any,_std:any):void{
  
    var title=_title;
    var BS=Number(_BS);  
    var DA=Number(_DA);
    var HRA=Number(_HRA);
    var LTA=Number(_LTA);
    var MA=Number(_MA);
    var BPA=Number(_BPA);
    var TDSE=Number(_TDSE);
    var HRAE=Number(_HRAE);
    var STE=Number(_STE);
    var TE=Number(_TE);
    var ELE=Number(_ELE);
    var PFE=Number(_PFE);
    var FDE=Number(_FDE);  
    var std=Number(_std);
    
   this.grossSalary=(BS+DA+HRA+LTA+MA+BPA)*12; 
   ReportEditFormComponent._grossSalary  =this.grossSalary;
   this.total_exemtion=(TDSE+HRAE+STE+TE+ELE+PFE+FDE)*12+std;
   ReportEditFormComponent._total_exemtion=this.total_exemtion;
   this.taxableIncome=this.grossSalary-  this.total_exemtion;
   ReportEditFormComponent._taxableIncome=this.taxableIncome;
    if( this.taxableIncome<250000){
     this.taxableIncome=0;
     ReportEditFormComponent._taxableIncome=this.taxableIncome;
     this.tax=0;
     ReportEditFormComponent._taxPercent=0;
     ReportEditFormComponent._tax=this.tax;
     ReportEditFormComponent.flag=1;
    }else if( this.taxableIncome>=250000 &&  this.taxableIncome<500000) {
     this.taxPercent="5%"
     ReportEditFormComponent._taxPercent=this.taxPercent;
     this.tax=((this.taxableIncome*5)/100)+12500;
     ReportEditFormComponent._tax=this.tax;
     ReportEditFormComponent.flag=1;
    }
    else if( this.taxableIncome>=500000 &&  this.taxableIncome<1000000) {
     this.taxPercent="20%"
     ReportEditFormComponent._taxPercent=this.taxPercent;
     this.tax=((this.taxableIncome*20)/100)+12500;
     ReportEditFormComponent._tax=this.tax;
     ReportEditFormComponent.flag=1;
    }
    else if( this.taxableIncome>=1000000 ) {
     this.taxPercent="30%"
     ReportEditFormComponent._taxPercent=this.taxPercent;
     this.tax=((this.taxableIncome*30)/100)+112500;
     ReportEditFormComponent._tax=this.tax;
     ReportEditFormComponent.flag=1;
    }
    
    
    
 
   }

   saveOnServer(_title:any,_BS:any,_DA:any,_HRA:any,_LTA:any,_MA:any,_BPA:any,_TDSE:any,_HRAE:any,_STE:any,_TE:any,_ELE:any,_PFE:any,_FDE:any,_std:any):any{
    
     if(ReportEditFormComponent.flag==1){
      this.http.post("https://webapi20211205161736.azurewebsites.net/api/updateData",            
        {
          userid: Sharedata.id,
          id:Sharedata.editDataId,
          bs: _BS,
          ds: _DA,
          hra: _HRA,
          lta: _LTA,
          ma: _MA,
          bpa: _BPA,
          tdse: _TDSE,
          hrae: _HRAE,
          ste: _STE,
          te: _TE,
          ele: _ELE,
          pfe: _PFE,
          fde: _FDE,
          std: _std,
          gs: ReportEditFormComponent._grossSalary,
          exemption: ReportEditFormComponent._total_exemtion,
          taxable: ReportEditFormComponent._taxableIncome,
          slab: ReportEditFormComponent._taxPercent,
          tax: ReportEditFormComponent._tax,
          title: _title
        }
      ).subscribe((data:any)=>{
       
         console.log(data); 
        
      });
     }
     else{
       alert("first Calculate tex then save");
     }
  }

}
