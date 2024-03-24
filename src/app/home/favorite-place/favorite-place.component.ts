import { Component, OnInit } from '@angular/core';
import { Deals, GlobalService } from '../../global.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorite-place',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favorite-place.component.html',
  styleUrl: './favorite-place.component.css'
})
export class FavoritePlaceComponent implements OnInit {

  favoriteDeals:Deals[] = []
  constructor(private globalService:GlobalService){}
  ngOnInit(): void {
    this.globalService.getDeals('Vacation',3).subscribe({
      next: (resp) => {
        this.favoriteDeals = resp;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
