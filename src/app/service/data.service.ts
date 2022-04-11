import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //database
  database: any = {

    1000: { acno: 1000, uname: "Neer", password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "Laisha", password: 1001, balance: 3000 },
    1002: { acno: 1002, uname: "Vyom", password: 1002, balance: 4000 },
  }

  constructor() { }
  // register
  register(uname: any, acno: any, password: any) {
    let database = this.database
    if (acno in database) {
      // already exist acno
      return false
    } else {
      // add details to db
      database[acno] = {

        acno,
        uname,
        password,
        balance: 0
      }

    } console.log(database);

    return true
  }

  login(acno: any, pswd: any) {


    let database = this.database

    if (acno in database) {
      if (pswd == database[acno]["password"]) {
        return true
      }
      else {
        alert("Incorrect Password!!!")
        return false
      }

    }
    else {
      alert("User does not exist")
      return false
    }
  }
  // deposit
  deposit(acno: any, pswd: any, amount: any) {
    let database = this.database
    var Amount = parseInt(amount)
    if (acno in database) {
      if (pswd == database[acno]["password"]) {

        database[acno]["balance"] += Amount
        return database[acno]["balance"]
      }
      else {
        alert("Incorrect Password!!!")
        return false
      }

    }
    else {
      alert("User does not exist!!!")
      return false

    }
  }
  // withdraw
  withdraw(acno: any, pswd: any, amount: any) {
    let database = this.database
    var Amount = parseInt(amount)
    if (acno in database) {
      if (pswd == database[acno]["password"]) {
        if(database[acno]["balance"]>amount){
          database[acno]["balance"]-=amount
          return database[acno]["balance"]
        }
        else {
          alert("Insufficient balance!!!")
          return false
        }


      }
      else {
        alert("Incorrect Password!!!")
        return false
      }

    }
    else {
      alert("User does not exist!!!")
      return false

    }
  }
}