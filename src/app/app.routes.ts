import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DealDetailsComponent } from './deal-details/deal-details.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"vacations", loadComponent: () => import('./vacation/vacation.component').then(module => module.VacationComponent)},
    {path:"deals",component:DealDetailsComponent},
    {path:"destination",loadChildren:() => import('./destination/destination.routes').then(module => module.DESTINATION_ROUTES)},
    {path: "**", redirectTo: "/"}
];
