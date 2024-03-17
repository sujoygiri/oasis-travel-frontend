import { Routes } from '@angular/router';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { DestinationComponent } from './destination.component';

export const DESTINATION_ROUTES: Routes = [
  { path: '', component: DestinationComponent },
  { path: ':region', component: DestinationDetailsComponent },
  { path: ':region/:country', component: DestinationDetailsComponent },
  { path: ':region/:country/:place', component: DestinationDetailsComponent },
  { path: '**', redirectTo: '' },
];
