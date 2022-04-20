import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  acno = ""
  pswd = ""
  amount = ""

  acno1 = ""
  pswd1 = ""
  amount1 = ""

  user: any

  // deposit form model
  depositForm = this.fb.group({

    amount: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })
  // withdraw form model


  withdrawForm = this.fb.group({

    amount: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })

  constructor(private ds: DataService, private fb: FormBuilder, private router:Router) {
    this.user = this.ds.currentUser
  }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("Please Log In....")
      this.router.navigateByUrl("")

    }
  }
  deposit() {
    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount


    if (this.depositForm.valid) {
      // caliing deposit in dataservice

      const result = this.ds.deposit(acno, pswd, amount)
      if (result) {
        alert(amount + "successfully deposited..And new balance is " + result)
      }
    }
    else {
      alert("Inavalid Form")
    }

  }
  withdraw() {
    var acno = this.withdrawForm.value.acno1
    var pswd = this.withdrawForm.value.pswd1
    var amount = this.withdrawForm.value.amount1

    if (this.depositForm.valid) {
      // calling withdraw in dataservice
      const result = this.ds.withdraw(acno, pswd, amount)
      if (result) {
        alert(amount + "Successfully debited.. New balance is :" + result)
      }

    }
    else {
      alert("Invalid Form")
    }

  }
  //log out
  logout() {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }

}
