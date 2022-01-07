import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
  {id:1,text:'Age is no barrier. It is a limitation you put on your mind' , author: 'Jackie Joyner-Kersee'},
  {id:3,text:'To give anything less than your best, is to sacrifice the gift.',author:'Steve Prefontaine'},
  {id:4,text:'People can say what they want about me. But I have got a big heart and will keep going.',author:'Tyson Furry'},
  {id:5,text:'Only the disciplined ones in life are free. If you are undisciplined, you are a slave to your moods and your passions.',author:'Eliud Kipchoge'},
  {id:6,text:'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.',author:'Pele'},
  {id:7,text:'The road to our dreams has many detours.',author:'Kurt Warner'}
  ];
}
