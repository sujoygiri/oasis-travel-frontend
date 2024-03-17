import { Component, OnInit } from '@angular/core';
import { IntroSectionComponent } from '../../shared-component/page-intro-section/intro-section.component';
import { GlobalService } from '../../global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-destination-details',
  standalone: true,
  imports: [IntroSectionComponent, TitleCasePipe, CommonModule],
  templateUrl: './destination-details.component.html',
  styleUrl: './destination-details.component.css',
})
export class DestinationDetailsComponent implements OnInit {
  introImage: string = '';
  introTitle: string = '';
  introText: string = '';
  showLoadingSpinner: boolean = false;
  destinationName: string = '';
  destinationCurrency: string = '';
  destinationPopularDrink: string = '';
  destinationTippingCustom: string = '';
  destinationMustEatCuisine: string = '';
  destinationSpokenLanguage: string = '';
  destinationPowerDetail: string = '';
  destinationWeather: string = '';
  destinationBestTimeToVisit: string = '';
  destinationText: string = '';
  destinationGettingThere: string = '';
  destinationMap: string = '';
  destinationTopThingsToDo: string = '';
  destinationTopPlaceImage: string = '';

  constructor(
    private globalService: GlobalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let region: string | undefined = '';
    let country: string | undefined = '';
    let place: string | undefined = '';
    this.showLoadingSpinner = true;
    this.activatedRoute.params.subscribe({
      next: (value) => {
        region = value['region'];
        country = value['country'];
        place = value['place'];
      },
    });
    this.globalService.getDestinationDetail(region, country, place).subscribe({
      next: (value) => {
        // console.log(value);
        this.introTitle = value.title;
        this.introImage = value.introImage;
        this.introText = value.text;
        this.destinationName = value.name;
        this.destinationCurrency = value.at_a_glance.currency;
        this.destinationPopularDrink = value.at_a_glance.popular_drink;
        this.destinationTippingCustom = value.at_a_glance.tipping_custom;
        this.destinationMustEatCuisine = value.at_a_glance.must_eat;
        this.destinationSpokenLanguage = value.at_a_glance.language;
        this.destinationPowerDetail = value.at_a_glance.power_up;
        this.destinationWeather = value.at_a_glance.weather;
        this.destinationBestTimeToVisit = value.at_a_glance.best_time_to_visit;
        this.destinationText = value.at_a_glance.text;
        this.destinationGettingThere = value.at_a_glance.getting_there;
        this.destinationMap = value.at_a_glance.place_map_image_url;
        this.destinationTopThingsToDo = value.things_to_do.content;
        this.destinationTopPlaceImage = value.things_to_do.things_image_url;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.showLoadingSpinner = false;        
      },
    });
  }
}
