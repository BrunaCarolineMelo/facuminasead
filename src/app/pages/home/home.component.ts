import { Component, OnInit } from '@angular/core';
import { TesteService } from '../../services/teste.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any = new Array();

  texto: string = 'Aqui fica uma frase de efeito bem legal da Universidade.';

  constructor(
    private teste: TesteService
  ) { }

  ngOnInit(): void {
    this.data=this.teste.getAreas()
  }

}
