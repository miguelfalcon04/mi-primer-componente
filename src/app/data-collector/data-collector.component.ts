import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Interfaz que define la estructura de una persona
export interface Person {
  name?: string;
  surname?: string;
  age?: number;
}

@Component({
  selector: 'app-data-collector',
  templateUrl: './data-collector.component.html',
  styleUrls: ['./data-collector.component.scss'],
})
export class DataCollectorComponent {
  person: Person = {}; // Inicializado como un objeto vacío

  constructor(private router: Router) {}

  // Método para guardar la persona y navegar a la página de inicio
  addPerson() {
    // Verificar si los campos están llenos antes de guardar
    if (this.person.name && this.person.surname && this.person.age) {
      // Guardar la persona en localStorage
      localStorage.setItem('person', JSON.stringify(this.person));
      this.router.navigate(['/home']);
    } else {
      // Aquí puedes agregar lógica para manejar campos vacíos, como mostrar un mensaje de error
      console.log('Por favor complete todos los campos.');
    }
  }
}
