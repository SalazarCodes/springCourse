import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes[
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'directivas', component: DirectiveComponent },
  { path: 'clientes', component: ClientesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
