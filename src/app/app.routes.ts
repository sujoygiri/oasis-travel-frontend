import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DealDetailsComponent } from './vacation/deal-details/deal-details.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"vacations", loadChildren: () => import('./vacation/vacation.routes').then(module => module.VACATION_ROUTES)},
    {path:"destination",loadChildren:() => import('./destination/destination.routes').then(module => module.DESTINATION_ROUTES)},
    {path: "**", redirectTo: "/"}
];
