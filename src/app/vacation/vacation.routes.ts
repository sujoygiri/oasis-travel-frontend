import { Routes } from "@angular/router";
import { VacationComponent } from "./vacation.component";
import { DealDetailsComponent } from "./deal-details/deal-details.component";
import { VacationTypeDetailsComponent } from "./vacation-type-details/vacation-type-details.component";

export const VACATION_ROUTES:Routes = [
    {path:"",component:VacationComponent},
    {path:"deals/:dealName/:code",component:DealDetailsComponent},
    {path:":vacationType",component:VacationTypeDetailsComponent},
    {path: "**", redirectTo: ""}
]