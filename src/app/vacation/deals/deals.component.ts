import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Deals, GlobalService } from '../../global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent implements OnInit {
  deals: Deals[] = [];
  dealsType: string = '';
  constructor(private globalService: GlobalService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (param) => {
        this.dealsType = param['dealsType'];
      }
    });
    this.globalService.getDeals(this.dealsType).subscribe({
      next: (resp) => {
        console.log(resp);
      }
    });
  }
}
