import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Netflix-landing/Netflix.component').then((m) => m.NetflixComponent),
  },
];
