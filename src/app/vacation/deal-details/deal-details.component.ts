import { Component, OnInit } from '@angular/core';
import { DealDetailType, GlobalService } from '../../global.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';

interface Amenities {
  id: string;
  name:string
  value: string[];
}
@Component({
  selector: 'app-deal-details',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, RouterLink],
  templateUrl: './deal-details.component.html',
  styleUrl: './deal-details.component.css',
})
export class DealDetailsComponent implements OnInit {
  dealCode: string = '';
  dealDetails: DealDetailType = {
    valid: '',
    status: '',
    title: '',
    offer_name: '',
    includes: {
      air: '',
      hotel: '',
      rental_car: '',
      sightseeing: '',
      transfer: '',
      all_inclusive: '',
      adults_only: '',
    },
    featured: '',
    exclusive: '',
    mytime: '',
    get_carried_away: '',
    offer_type: '',
    offer_categories: [
      {
        id: '',
        name: '',
      },
    ],
    image: {
      name: '',
      alt: '',
      file_path: '',
      photo_caption: '',
      photo_caption_color: '',
    },
    offer_description: '',
    offer_valid: {
      start: '',
      end: '',
      date_range: '',
    },
    offer_publish: {
      publish: '',
      expire: '',
    },
    trip_dates: {
      depart: '',
      return: '',
      los: '',
      los_units: '',
      date_range: '',
    },
    destinations: [
      {
        term_id: '',
        destination_name: '',
        parent: '',
        destination_code: '',
        state: '',
        country: '',
        world_region: '',
        hide_fee: '',
      },
    ],
    hotels: [
      {
        hotel_id: '',
        name: '',
        brand: {
          id: '',
          name: '',
        },
        description: '',
        star_rating: '',
        address: {
          street_number: '',
          street_name: '',
          city: '',
          state: '',
          postal_code: '',
          country: '',
          longitude: '',
          latitude: '',
        },
        dining_entertainment: [],
        disabled_facilities: [],
        family_facilities: [],
        features: [],
        liesure_recreation: [],
        nearby: [],
        checkin: '',
        checkout: '',
        rooms: '',
        property_specialties: [],
        disclaimer: '',
        mytime: {
          short: '',
          long: '',
        },
      },
    ],
    top_choice: '',
    price: {
      priced_on: '',
      base_price: '',
      transfer_price: '',
      transfer_type: '',
      sightseeing_price: '',
      lowest_priced_city: '',
      total_price: '',
      advertised_price: '',
    },
    departure_cities: [
      {
        city_name: '',
        airfare_price: '',
        total_price: '',
        advertised_price: '',
        outbound_carrier: '',
        inbound_carrier: '',
        outbound_fare_class: '',
        inbound_fare_class: '',
        outbound_routing: '',
        inbound_routing: '',
      },
      {
        city_name: '',
        airfare_price: '',
        total_price: '',
        advertised_price: '',
        outbound_carrier: '',
        inbound_carrier: '',
        outbound_fare_class: '',
        inbound_fare_class: '',
        outbound_routing: '',
        inbound_routing: '',
      },
      {
        city_name: '',
        airfare_price: '',
        total_price: '',
        advertised_price: '',
        outbound_carrier: '',
        inbound_carrier: '',
        outbound_fare_class: '',
        inbound_fare_class: '',
        outbound_routing: '',
        inbound_routing: '',
      },
      {
        city_name: '',
        airfare_price: '',
        total_price: '',
        advertised_price: '',
        outbound_carrier: '',
        inbound_carrier: '',
        outbound_fare_class: '',
        inbound_fare_class: '',
        outbound_routing: '',
        inbound_routing: '',
      },
      {
        city_name: '',
        airfare_price: '',
        total_price: '',
        advertised_price: '',
        outbound_carrier: '',
        inbound_carrier: '',
        outbound_fare_class: '',
        inbound_fare_class: '',
        outbound_routing: '',
        inbound_routing: '',
      },
    ],
    special_notes: '',
    deal_id: '',
  };
  checkInTime: string = '';
  checkOutTime: string = '';
  allAmenities: Array<Amenities> = [];
  currentAmenitiesId: string = '';
  currentClassName: string = 'bi-chevron-down';

  constructor(
    private globalService: GlobalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (value) => {
        this.dealCode = value['code'];
      },
    });
    this.globalService.getDealsDetail(this.dealCode).subscribe({
      next: (response) => {
        this.dealDetails = response;
        let hotelDetail = response?.hotels[0];
        if (hotelDetail.features.length) {
          this.allAmenities.push({
            id: 'features',
            name: 'Features',
            value: hotelDetail.features,
          });
        }
        if (hotelDetail.family_facilities.length) {
          this.allAmenities.push({
            id: 'family_facilities',
            name: 'Family Facilities',
            value: hotelDetail.family_facilities,
          });
        }
        if (hotelDetail.dining_entertainment.length) {
          this.allAmenities.push({
            id: 'dining_entertainment',
            name: 'Dining Entertainment',
            value: hotelDetail.dining_entertainment,
          });
        }
        if (hotelDetail.disabled_facilities.length) {
          this.allAmenities.push({
            id: 'disabled_facilities',
            name: 'Disabled Facilities',
            value: hotelDetail.disabled_facilities,
          });
        }
        if (hotelDetail.liesure_recreation.length) {
          this.allAmenities.push({
            id: 'liesure_recreation',
            name: 'Liesure Recreation',
            value: hotelDetail.liesure_recreation,
          });
        }
        if (hotelDetail.nearby.length) {
          this.allAmenities.push({
            id: 'nearby',
            name: 'Nearby',
            value: hotelDetail.nearby,
          });
        }
        let checkIn = Number.parseInt(response.hotels[0].checkin) / 100;
        let checkOut = Number.parseInt(response.hotels[0].checkout) / 100;
        this.checkInTime =
          checkIn > 12 ? `${checkIn - 12}:00 PM` : `${checkIn}:00 AM`;
        this.checkOutTime =
          checkOut > 12 ? `${checkOut - 12}:00 PM` : `${checkOut}:00 AM`;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  showCorrectSymbol(amenitiesId: string) {
    this.currentAmenitiesId = amenitiesId;
    this.currentClassName =
      this.currentClassName === 'bi-chevron-down'
        ? 'bi-chevron-up'
        : 'bi-chevron-down';
  }

  handelBooking(){
    this.globalService.openBookingModal()
  }
}
