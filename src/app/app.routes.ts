import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () =>
      (await import('./home-page/home-page.component')).HomePageComponent,
  },
  {
    path: 'account',
    loadComponent: async () =>
      (await import('./account-page/account-page.component'))
        .AccountPageComponent,
  },
];
