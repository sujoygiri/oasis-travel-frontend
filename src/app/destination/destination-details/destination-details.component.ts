import { Component, OnInit } from '@angular/core';
import { IntroSectionComponent } from '../../shared-component/page-intro-section/intro-section.component';
import { GlobalService } from '../../global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destination-details',
  standalone: true,
  imports: [IntroSectionComponent],
  templateUrl: './destination-details.component.html',
  styleUrl: './destination-details.component.css'
})
export class DestinationDetailsComponent implements OnInit{
  introImage:string = "last-minute-drilldown.jpg";
  introTitle:string = "A World of Destinations";
  introText:string = "One planet. Endless possibilities. The most amazing destinations in the world are waiting for you. Whether you want to escape to a sun-soaked tropical paradise or envision stunning, snow-capped mountains before you, all you need to know is that Liberty Travel is beside you every step of the way.We believe no two vacations should be the same, and our well-traveled consultants know just what it takes to make it a memorable one. From weekend getaways and bucket-list trips to multi-stop tours, there’s an entire world out there for you to discover.";

  constructor(private globalService:GlobalService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    let region:string|undefined =  '';
    let country:string|undefined = '';
    let place:string|undefined = '';
    this.activatedRoute.params.subscribe({
      next: (value) => {
        region = value['region']
        country = value['country']
        place = value['place']
      }
    })
    console.log(region,country,place);

  }
}
