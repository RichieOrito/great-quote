import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete: any, index: any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].text}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  quotes:Quote[] = [
    new Quote(1, 'Age is no barrier. It is a limitation you put on your mind', 'Jackie Joyner-Kersee','Riisherd','', new Date(2021,10,12)),
    new Quote(2, 'To give anything less than your best, is to sacrifice the gift.', 'Steve Prefontaine','Shikkie', '',new Date(2020,11,4)),
    new Quote(3, 'People can say what they want about me. But I have got a big heart and will keep going', 'Tyson Furry', 'Alvondo', '',new Date(2021,8,3)),
    new Quote(4, 'Only the disciplined ones in life are free. If you are undisciplined, you are a slave to your moods and your passions.', 'Eliud Kipchoge','Dan', '', new Date(2021,12,25)),
    new Quote(5, 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.','Pele','Rue','', new Date(2022,1,1)),
    new Quote(6, 'The road to our dreams has many detours.', 'Kurt Warner','ozil','', new Date(2021,7,10))
    ];

    @Input() quote: any;
    upvote = 0;
    downvote = 0;
  
    quoteUpvote() {
      this.upvote++;
    }
    quoteDownvote() {
      this.downvote++;
    }

    addNewQuote(quote: any){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.unshift(quote)
    }

  constructor() { }

  ngOnInit(): void {
  }

}
