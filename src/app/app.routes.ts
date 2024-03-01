import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"home", component: HomeComponent},
    {path:"vacations", loadComponent: () => import('./vacation/vacation.component').then(mod => mod.VacationComponent)},
    {path: "**", redirectTo: "/home"}
];
