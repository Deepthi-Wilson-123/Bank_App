import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=this.fb.group({

  uname:[''],
  acno:[''],
  pswd:['']
  
})
  constructor(private db:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
register(){

  var acno=this.registerForm.value.acno
  var pswd=this.registerForm.value.pswd
  var uname=this.registerForm.value.uname
  const result = this.db.register(uname,acno,pswd)
  if(result){
    alert("Successfully registered!!!!")
    this.router.navigateByUrl("")
  }
  else{
    alert("account already exist..Please Login!!!")
  }
  
}
}
