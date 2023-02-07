import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Netflix/Netflix.component').then((m) => m.NetflixComponent),
  },
];
