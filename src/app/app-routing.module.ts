import { Routes } from '@angular/router';
import { NetflixComponent } from './Netflix-landing/Netflix.component';
import { PageOneComponent } from './WhantToKnowMore/Page1/pageOne.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: NetflixComponent },
      { path: 'signup', component: PageOneComponent },
    ],
  },
];
