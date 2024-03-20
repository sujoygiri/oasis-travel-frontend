import { Component, Input, OnInit, input } from '@angular/core';
import { IntroSectionComponent } from '../../shared-component/page-intro-section/intro-section.component';
import { GlobalService } from '../../global.service';
import { DealsComponent } from '../deals/deals.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacation-type-details',
  standalone: true,
  imports: [IntroSectionComponent, DealsComponent],
  templateUrl: './vacation-type-details.component.html',
  styleUrl: './vacation-type-details.component.css'
})
export class VacationTypeDetailsComponent implements OnInit {
  @Input()
  introTitle: string = 'All-Inclusive Vacation Packages: Leave Your Worries and Wallet Behind';
  @Input()
  introText: string = "Whether you're looking for a romantic escape, an adventure with friends, or a memorable family vacation, we’ve got all-inclusive getaways with your name on it. Between gourmet dining, thrilling activities, and endless entertainment for everyone – including kids clubs at select resorts – we're here to craft your complete all-inclusive package at one great price. Liberty Travel agents are experts in the destinations you seek, so pack everything but your worries and indulge with us.";
  @Input()
  introImage: string = 'all-inclusive-drilldown.jpg';
  @Input()
  vacationType: string = '';

  constructor(private globalService: GlobalService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (value) => {
        this.vacationType = this.getTransformedVacationType(value['vacationType']);
      },
    });
  }

  getTransformedVacationType(type: string): string {
    let transformedType: string = '';
    switch (type) {
      case 'all-inclusive':
        transformedType = 'All Inclusive';
        break;
      case 'family':
        transformedType = 'Family';
        break;
      case 'adults-only':
        transformedType = 'Adults Only';
        break;
      case 'honeymoon':
        transformedType = 'Honeymoon';
        break;
      case 'last-minute':
        transformedType = 'Last Minute';
        break;
      case 'beach':
        transformedType = 'Beach';
        break;
      case 'exotic':
        transformedType = 'Exotic';
        break;
      // case 'family':
      //   transformedType = 'Family';
      //   break;
      // case 'all-inclusive':
      //   transformedType = 'All Inclusive';
      //   break;
      // case 'family':
      //   transformedType = 'Family';
      //   break;
      default:
        break;
    }
    return transformedType;
  }

}
