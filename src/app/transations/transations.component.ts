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
    this.acno=this.ds.currentAcno
    this.transaction=this.ds.transaction(this.acno)
    console.log(this.transaction);
    
    
   }

  ngOnInit(): void {
  }

}
