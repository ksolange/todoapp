import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  wellcome = 'Hola todoapp';
  tasks = signal ([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio'
  ]);

  name = signal('Karen');
  age = 15;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = signal ({
    name : 'Karen',
    age: 19, 
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  });

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50, {
    nonNullable: true,
  });

  nameCtrl = new FormControl('Karen', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });
  constructor(){
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  clickHandler(){
    alert(' Hola se ejecuta en html ( ) ')
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
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

  changeAge(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return{
        ...prevState,
        age: parseInt(newValue, 10)
      }
    });
  }

  changeName(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return{
        ...prevState,
        name: newValue
      }
    });
  }
  
}
