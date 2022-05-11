import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transations',
  templateUrl: './transations.component.html',
  styleUrls: ['./transations.component.css']
})
export class TransationsComponent implements OnInit {

  transaction:any
  acno:any

  constructor(private ds:DataService) {
    this.acno=JSON.parse(localStorage.getItem("currentAcno")||'')
    this.ds.transaction(this.acno)
    .subscribe((result:any)=>{
      if(result){
        this.transaction=result.transaction
      }
    },(result)=>{
      alert(result.error.message)
      
    }
    )
    console.log(this.transaction)
    
    
   }

  ngOnInit(): void {
  }

}
