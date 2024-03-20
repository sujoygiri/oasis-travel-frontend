import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Deals, GlobalService } from '../../global.service';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent implements OnInit {
  @Input()
  vacationType:string = 'Vacation';
  deals: Deals[] = [];
  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.getDeals(this.vacationType).subscribe({
      next: (resp) => {
        this.deals = resp
      }
    });
  }
}
