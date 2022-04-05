import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your Perfect Banking Partner"
  accnum = "Account Number Please"
  acno = ""
  pswd = ""

  //database
  database: any = {

    1000: { acno: 1000, uname: "Neer", password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "Laisha", password: 1001, balance: 3000 },
    1002: { acno: 1002, uname: "Vyom", password: 1002, balance: 4000 },
  }

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event: any) {

    this.acno = event.target.value
  }

  pswdChange(event: any) {

    this.pswd = event.target.value
  }


  // // login using event binding
  //  login() {
  //    //----user entered acno n pswd-----//
  //    var acno=this.acno
  //    var pswd=this.pswd

  //    let database=this.database

  //    if(acno in database){
  //     if(pswd == database[acno]["password"]){
  //       alert("login successful!!!!!!!!")
  //     }
  //     else{
  //       alert("Invalid password")
  //     }

  //    }
  //    else{
  //      alert("User does not exist")
  //     }
  //  }

  //login using template referencing variable 

  login(a: any, p: any) {

    console.log(a.value)
    //----user entered acno n pswd-----//
    var acno = a.value
    var pswd = p.value

    let database = this.database

    if (acno in database) {
      if (pswd == database[acno]["password"]) {
        alert("login successful!!!!!!!!")
      }
      else {
        alert("Invalid password")
      }

    }
    else {
      alert("User does not exist")
    }
  }
}
