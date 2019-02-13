import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html'
})

export class DirectiveComponent {
  listaCursos: string[] = ['JavaScript', 'Java', 'C#', 'PHP'];

  habilitar = true;

  constructor() { }

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true) ? false : true;
  }
}
