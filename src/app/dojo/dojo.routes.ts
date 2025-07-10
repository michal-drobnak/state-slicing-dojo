import { Routes } from '@angular/router';

export default <Routes>[{ path: '', loadComponent: () => import('./dojo.component').then((m) => m.DojoComponent) }];
