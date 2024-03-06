import { Component } from '@angular/core';
import {IntroSectionComponent} from "../shared-component/page-intro-section/intro-section.component";

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [IntroSectionComponent],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {
  introImage:string = "destination-pg.jpg";
  introTitle:string = "A World of Destinations";
  introText:string = "One planet. Endless possibilities. The most amazing destinations in the world are waiting for you. Whether you want to escape to a sun-soaked tropical paradise or envision stunning, snow-capped mountains before you, all you need to know is that Liberty Travel is beside you every step of the way.We believe no two vacations should be the same, and our well-traveled consultants know just what it takes to make it a memorable one. From weekend getaways and bucket-list trips to multi-stop tours, there’s an entire world out there for you to discover."
}
