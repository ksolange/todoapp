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
  age = 15
}
