import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // register form model


  registerForm = this.fb.group({

    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    acno: [''],
    pswd: ['']

  })
  constructor(private db: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {

    var acno = this.registerForm.value.acno
    var pswd = this.registerForm.value.pswd
    var uname = this.registerForm.value.uname


    if (this.registerForm.valid) {
      const result = this.db.register(uname,  acno, pswd)
      if (result) {
        alert("Successfully registered!!!!")
        this.router.navigateByUrl("")
      }
      else {
        alert("account already exist..Please Login!!!")
      }
    } else {
      alert("Invalid Form!!!!")
    }
  }
}
