import { Component } from '@angular/core';

export interface Person{
  name: string,
  surname: string,
  age: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  people:Person[] = [];

  constructor() {
    this.people.push({
      name: "Miguel J.",
      surname: "Falcon",
      age: 20
    })
  }

}
