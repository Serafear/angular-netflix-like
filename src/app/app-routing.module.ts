import { Routes } from '@angular/router';
import { PageOneComponent } from './WhantToKnowMore/Page1/pageOne.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'fr',
    pathMatch: 'full'
  },
  {
    path: 'fr',
    children: [
      { path: '', component: AppComponent },
      { path: 'signup', component: PageOneComponent },
    ],
  },
];
