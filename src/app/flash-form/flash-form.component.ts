import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-flash-form',
  templateUrl: './flash-form.component.html',
  styleUrls: ['./flash-form.component.css']
})
export class FlashFormComponent implements OnInit {
 
 @Output() addCard:any=new EventEmitter()

  newCard = new Card("","",);

  constructor() { }

  ngOnInit(): void {
  }

  formDetails(){

  this.addCard.emit(this.newCard)
  // this.myForm.reset();
  
 

  }

}
