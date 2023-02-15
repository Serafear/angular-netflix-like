import { Routes } from '@angular/router';
import { MainFrComponent } from './Netflix-landing/main-landing/main-landing.component';
import { PageOneComponent } from './WhantToKnowMore/Page1/pageOne.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'fr',
    pathMatch: 'full',
  },
  {
    path: 'fr',
    children: [
      { path: '', component: MainFrComponent },
      { path: 'signup', component: PageOneComponent },
    ],
  },
];
