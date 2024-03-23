import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Deals, GlobalService } from '../../global.service';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css',
})
export class DealsComponent implements OnInit {
  @Input()
  vacationType: string = 'Vacation';
  deals: Deals[] = [];
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    let type = this.getTransformedVacationType(this.vacationType) || 'Vacation';    
    this.globalService.getDeals(type).subscribe({
      next: (resp) => {
        this.deals = resp;
      },
    });
  }

  getTransformedVacationType(type: string): string {
    let transformedType: string = '';
    switch (type) {
      case 'all-inclusive':
        transformedType = 'all_inclusive';
        break;
      case 'family':
        transformedType = 'family';
        break;
      case 'adults-only':
        transformedType = 'adults_only';
        break;
      case 'honeymoon':
        transformedType = 'honeymoon';
        break;
      case 'last-minute':
        transformedType = 'lastMinute';
        break;
      case 'beach':
        transformedType = 'beach';
        break;
      case 'exotic':
        transformedType = 'exotic';
        break;
      case 'Luxary':
        transformedType = 'luxary';
        break;
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
