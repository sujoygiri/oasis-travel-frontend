import { Component, OnInit } from '@angular/core';
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
  deals: Deals[] = [];
  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.getDeals('').subscribe({
      next: (resp) => {
        this.deals = resp
      }
    });
  }
}
