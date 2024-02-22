import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  wellcome = 'Hola todoapp';
  tasks = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componente'
  ];
  name = 'Karen';
  age = 15;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name : 'Karen',
    age: 15, 
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler(){
    alert(' Hola se ejecuta en html ( ) ')
  }

  changeHandler(event: Event){
    console.log(event);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  valueInput = '';

  changeTextKeyboard(event: KeyboardEvent) {
    const elementInput = event.target as HTMLInputElement;
    this.valueInput = elementInput.value;
  }
}
