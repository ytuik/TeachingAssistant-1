import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "Insira o Nome", cpf: "Insira o CPF", email: "Insira um Email", github:"Insira um github"};
   title = 'ta-gui';
}

export class Aluno {
  nome!: string;
  cpf!: string;
  email!: string;
  github !: string;
}
