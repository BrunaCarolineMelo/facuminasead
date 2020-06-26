import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  areas = [
    { id: 1, name: 'Saúde'},
    { id: 2,name: 'Tecnologia'},
    { id: 3,name: 'Beleza'},
    { id: 4,name: 'Humanas'},
    { id: 5,name: 'Educação'},
  ];

  cursos=[
    { id: 1, name: 'Enfermagem', area:1},
    { id: 2, name: 'Curso Javascript',  area:2},
    { id: 3, name: 'Estética', area:3},
    { id: 4, name: 'Sociologia', area:4},
    { id: 5,  name: 'Pedagogia', area:5},
  ]

  constructor() { }

  getAreas(){
    return this.areas;
  }
}
