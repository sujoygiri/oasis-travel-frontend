import { Component, OnInit } from '@angular/core';
import { IntroSectionComponent } from '../shared-component/page-intro-section/intro-section.component';
import { DestinationRespType, GlobalService } from '../global.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [IntroSectionComponent, CommonModule, RouterLink],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css',
})
export class DestinationComponent implements OnInit {
  introImage: string = 'destination-pg.jpg';
  introTitle: string = 'A World of Destinations';
  introText: string =
    'One planet. Endless possibilities. The most amazing destinations in the world are waiting for you. Whether you want to escape to a sun-soaked tropical paradise or envision stunning, snow-capped mountains before you, all you need to know is that Liberty Travel is beside you every step of the way.We believe no two vacations should be the same, and our well-traveled consultants know just what it takes to make it a memorable one. From weekend getaways and bucket-list trips to multi-stop tours, there’s an entire world out there for you to discover.';
  tropicalDestination: DestinationRespType[] = [];
  allDestinationRowOne: DestinationRespType[] = [];
  allDestinationRowTwo: DestinationRespType[] = [];
  showLoadingSpinner:boolean = false;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.showLoadingSpinner = true;
    this.globalService.getAllDestination().subscribe({
      next: (value) => {
        this.tropicalDestination = value.filter(
          (destination) => destination.isTropical
        );
        let allDestination = value.filter(
          (destination) => !destination.isTropical
        );
        this.allDestinationRowOne = allDestination.slice(0, 3);
        this.allDestinationRowTwo = allDestination.slice(3);
      },
      error: (err) => {
        console.log(err);
      },
      complete:()=>{
        this.showLoadingSpinner = false;
      }
    });
  }
}
