import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomePageModule } from '../home/home.module';


@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent {
  @Input('name') name:string = "";
  @Input('surname') surname:string = "";
  @Input('age') age:number = 0;
  @Input('fav') fav: Boolean = false;

  constructor() { }

  onFavClick(){

  }




}
