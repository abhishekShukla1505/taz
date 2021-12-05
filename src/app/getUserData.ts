import { HttpClient } from "@angular/common/http";
import * as internal from "stream";

export class getUserData{
  static  data:any=[];
  static id:any;
  
  private http!: HttpClient;
  getUserData(_id:any){
    
     getUserData.id=_id;
     
     this.http.post("https://localhost:44328/api/login",{            
        userId:getUserData.id,
      
      }).subscribe((mydata:any)=>{
        getUserData.data=mydata;        
      });
  }
   
}