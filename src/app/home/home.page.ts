import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';


export interface Person {
  name: string,
  surname: string,
  age: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  people: Person[] = [];

  constructor(private router:Router) {
    this.people.push({
      name: "Miguel J.",
      surname: "Falcon",
      age: 20
    });

    this.router.events.pipe(
      filter(e => e instanceof NavigationStart)
    ).subscribe(e => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras.state) {
        const newPerson: Person = navigation.extras.state['person'];

        // Verificar si hay una nueva persona y añadirla
        if (newPerson) {
          this.people.push(newPerson);
        }
      }
    });

  }

}
