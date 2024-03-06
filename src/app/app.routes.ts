import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"home", component: HomeComponent},
    {path:"vacations", loadComponent: () => import('./vacation/vacation.component').then(module => module.VacationComponent)},
    {path:"destination",loadChildren:() => import('./destination/destination.routes').then(module => module.DESTINATION_ROUTES)},
    {path: "**", redirectTo: "/home"}
];
