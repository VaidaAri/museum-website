import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { History } from './pages/history/history';
import { Publications } from './pages/publications/publications';
import { Contact } from './pages/contact/contact';
import { Exhibitions } from './pages/exhibitions/exhibitions';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'istoric', component: History },
  { path: 'publicatii', component: Publications },
  { path: 'contact', component: Contact },
  { path: 'expozitii', component: Exhibitions },
];