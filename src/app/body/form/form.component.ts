import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titulo = 'FRAMEWORK ANGULAR';
  cursos = ['Angular'];

  addCurso(nombrec:String){
    this.cursos.push(String(nombrec));
  }

}
