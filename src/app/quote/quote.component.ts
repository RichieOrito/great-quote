import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Age is no barrier. It is a limitation you put on your mind', 'Jackie Joyner-Kersee','Riisherd','#Motivation', new Date(2021,10,12)),
    new Quote(2, 'To give anything less than your best, is to sacrifice the gift.', 'Steve Prefontaine','Shikkie', '#keep Pushing',new Date(2020,11,4)),
    new Quote(3, 'People can say what they want about me. But I have got a big heart and will keep going', 'Tyson Furry', 'Alvondo', '#Focus on yourself',new Date(2021,8,3)),
    new Quote(4, 'Only the disciplined ones in life are free. If you are undisciplined, you are a slave to your moods and your passions.', 'Eliud Kipchoge','Dan', '#Discipline', new Date(2021,12,25)),
    new Quote(5, 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.','Pele','Rue','#Success', new Date(2022,1,1)),
    new Quote(6, 'The road to our dreams has many detours.', 'Kurt Warner','ozil','#Dreams', new Date(2021,7,10))
    ];

    @Input() quote: any;
    upvote = 0;
    downvote = 0;
  
    quoteUpvote(): void {
      this.upvote++;
    }
    quoteDownvote(): void {
      this.downvote++;
    }

    addNewQuote(quote: any){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }

  constructor() { }

  ngOnInit(): void {
  }

}
