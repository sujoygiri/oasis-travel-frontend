import { Component } from '@angular/core';
import { IntroSectionComponent } from '../shared-component/page-intro-section/intro-section.component';
import { DealsComponent } from './deals/deals.component';
import {VacationTypeComponent} from "./vacation-type/vacation-type.component";

@Component({
  selector: 'app-vacation',
  standalone: true,
  imports: [IntroSectionComponent,DealsComponent,VacationTypeComponent],
  templateUrl: './vacation.component.html',
  styleUrl: './vacation.component.css'
})
export class VacationComponent {
  introImage:string = "family-image-838x557.jpg"
  introTitle:string = "Vacation Packages: Connecting You and the Destination";
  introText:string = "When it comes to vacations, there are as many ways to explore the world as there are people on it. Our family, honeymoon, or adults-only vacations connect you with each other and your destination. If you want it all, our all-inclusive or luxury vacations have you covered at some of the world's most popular resorts. Do more with our casino or golf and spa vacations. Take a journey with our exotic vacations. Whether you're planning a cruise or a last-minute break to your favorite city—your Liberty Travel vacation consultant can match you with a vacation package that's just your style.";
}
