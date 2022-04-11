import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your Perfect Banking Partner"
  accnum = "Account Number Please!!!"
  acno = ""
  pswd = ""

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  acnoChange(event: any) {

    this.acno = event.target.value
  }

  pswdChange(event: any) {

    this.pswd = event.target.value
  }


  // // login using event binding/two way referencing
   login() {
     //----user entered acno n pswd-----//
      var acno=this.acno
      var pswd=this.pswd
    // call login in dataservice
     const result =this.ds.login(acno,pswd)

     if(result){
       alert("login successful!!!!!!!!")
        this.router.navigateByUrl("dashboard")
      }
    }
    

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    //login using template referencing variable 

  // login(a: any, p: any) {

  //   console.log(a.value)
  //   //----user entered acno n pswd-----//
  //   var acno = a.value
  //   var pswd = p.value

  //   let database = this.database

  //   if (acno in database) {
  //     if (pswd == database[acno]["password"]) {
  //       alert("login successful!!!!!!!!")
  //     }
  //     else {
  //       alert("Invalid password")
  //     }

  //   }
  //   else {
  //     alert("User does not exist")
  //   }
  // }
}
