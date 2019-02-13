import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {
      'id': 0,
      'nombre': 'Ella',
      'apellido': 'Small',
      'email': 'Repetwire',
      'fechaCreacion': 'Emmons Avenue'
    },
    {
      'id': 10,
      'nombre': 'Lauri',
      'apellido': 'Morin',
      'email': 'Nipaz',
      'fechaCreacion': 'Emerald Street'
    },
    {
      'id': 20,
      'nombre': 'Lucas',
      'apellido': 'Gallagher',
      'email': 'Accruex',
      'fechaCreacion': 'Corbin Place'
    },
    {
      'id': 30,
      'nombre': 'Rush',
      'apellido': 'Pitts',
      'email': 'Imageflow',
      'fechaCreacion': 'Clay Street'
    },
    {
      'id': 40,
      'nombre': 'Collins',
      'apellido': 'Wilkins',
      'email': 'Zboo',
      'fechaCreacion': 'Brighton Court'
    },
    {
      'id': 50,
      'nombre': 'Nettie',
      'apellido': 'Caldwell',
      'email': 'Remotion',
      'fechaCreacion': 'Blake Avenue'
    },
    {
      'id': 60,
      'nombre': 'Lucia',
      'apellido': 'Britt',
      'email': 'Enersol',
      'fechaCreacion': 'Argyle Road'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
