import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  getData(n:string,e:string,p:string):any{
    if(n!==""){
      if(e!==""){
        if(p!=='' && p.length>=6){
          this.http.post("https://webapi20211205161736.azurewebsites.net/api/users",{
            userName:n.toString,
            userEmail:e.toString,
            userPassword:p.toString,
          }).subscribe((data:any)=>{
            if(data[0].id>=1001){
              this.router. navigate([`/dashboard/${data[0].id}`]);
            };
            
          });
          return 0;
        }
        else{
          alert("Pasword feild is importent and should be grater then 6 digit ");
        }
      }
      else{
        alert("Email feild is importent");
      }
    }
    else{
      alert("name feild is importent");
    }

   
  }
}
