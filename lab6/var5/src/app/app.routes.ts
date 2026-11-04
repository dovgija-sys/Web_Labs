import { Routes } from '@angular/router';
import { ArrayOneComponent } from './array-one/array-one';
import { ArrayTwoComponent } from './array-two/array-two';
import { LabSixComponent } from './lab-six/lab-six';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lab6' },
  { path: 'lab6', component: LabSixComponent, title: 'Лабораторна робота №6' },
  { path: 'array-one', component: ArrayOneComponent, title: 'Одновимірний масив' },
  { path: 'array-two', component: ArrayTwoComponent, title: 'Двовимірний масив' },
  { path: '**', redirectTo: 'lab6' },
];
