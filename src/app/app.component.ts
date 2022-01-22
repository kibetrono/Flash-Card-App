import { Component, ElementRef } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paraph='paragraph'

  frm=false;

  title = 'FlashCard';
  cards:Card[]=[
    {

question:"Who is the the richect man in the world?",
answer:"Musk",
completed:false

    },
    {
    
      question:"Which is the greatest team in EPL?",
      answer:"Chelsea",
completed:false

    },
    {
    
      question:"Who is your next president?",
      answer:"Kura yako siri yako",
completed:false

    },
    {
    
      question:"Tallest animal in the world?",
      answer:"Giraffe",
completed:false

    }
  ]
  constructor(private elem:ElementRef) {
    
 

   }

  ngOnInit(): void {
  }

  sendDetails(data:any){
    // let goalLength = this.cards.length;
    // data.id = goalLength+1;
    this.cards.push(data);

  }


  stikeThrough(data:number){

    this.cards.map((value,i)=>{
    if(i==data){
    value.completed=!value.completed
    }
    })
      }

}
