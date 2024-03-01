import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Deals{
  id:number,
  imageLink:string,
  title:string,
  place:string,
  nights:string,
  price:string
}

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent {
  deals:Deals[] = [
    {
      id:1,
      imageLink:'https://oms2.libertytravel.com/sites/default/files/styles/offer_card_image/public/Hilton%20PDC%20NEW%2021NOV_Resort_Aerial_10.jpg',
      title:'Hilton Playa del Carmen | Air & Vacation Package',
      place:'Riviera Maya, Mexico',
      nights:'4 nights',
      price:'from $1125'
    },
    {
      id:2,
      imageLink:'https://oms2.libertytravel.com/sites/default/files/styles/offer_card_image/public/Jewel-Grande.jpg',
      title:'Jewel Grande Montego Bay Resort & Spa | Air & Vacation Package',
      place:'Montego Bay, Jamaica',
      nights:'4 nights',
      price:'from $1165'
    },
    {
      id:3,
      imageLink:'https://oms2.libertytravel.com/sites/default/files/styles/offer_card_image/public/Gastro-Guide.jpg',
      title:'Riu Palace Paradise Island | Air & Vacation Package',
      place:'JParadise Island, Bahamas',
      nights:'4 nights',
      price:'from $1289'
    }
  ]
}
