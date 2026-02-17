import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Proyectos } from './pages/proyectos/proyectos';
import { Contacto } from './pages/contacto/contacto';
import { SobreMi } from './pages/sobre-mi/sobre-mi';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'proyectos', component: Proyectos },
  { path: 'sobre-mi', component: SobreMi },
  { path: 'contacto', component: Contacto },
];