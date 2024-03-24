import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface ModalStatusType {
  type: string;
  action: string;
}

export interface SignInUserDatType {
  username: string;
  email: string;
}

export interface SignUpUserDataType {
  username: string;
  email: string;
  password: string;
}

export interface AuthApiResponseType {
  success: boolean;
  message: string;
  userName?: string;
  userEmail?: string;
}

export interface DestinationRespType {
  name: string;
  imageUrl: string;
  routePath: string;
  isTropical: boolean;
}

export interface DestinationDetailResType {
  name: string;
  title: string;
  text: string;
  introImage: string;
  at_a_glance: {
    text: string;
    currency: string;
    popular_drink: string;
    tipping_custom: string;
    must_eat: string;
    power_up: string;
    language: string;
    getting_there: string;
    weather: string;
    best_time_to_visit: string;
    place_map_image_url: string;
  };
  things_to_do: {
    content: string;
    things_image_url: string;
  };
}

export interface Deals {
  title: string;
  name: string;
  type: string;
  star_rating: string;
  image: string;
  destination: [
    {
      name: string;
      parent: String;
    }
  ];
  advertsied_price: string;
  length_of_stay: string;
  los_units: string;
  includes: {
    air: string;
    hotel: string;
    rental_car: string;
    sightseeing: string;
    transfer: string;
    all_inclusive: string;
    adults_only: string;
    luxary: string | undefined;
    beach: string | undefined;
    casino: string | undefined;
    family: string | undefined;
    golf_and_spa: string | undefined;
    honeymoon: string | undefined;
    lastMinute: string | undefined;
  };
  featured: string;
  hot_deal: string;
  exclusive: string;
  my_time: string;
  get_carried_away: string;
  code: string;
}

export interface VacationTypeDetail {
  title: string;
  text: string;
  imageUrl: string;
  detailTitle: string;
  detailText: string;
  detailImageUrl: string;
  urlPath: string;
}

export interface DealDetailType {
  valid: string;
  status: string;
  title: string;
  offer_name: string;
  includes: {
    air: string;
    hotel: string;
    rental_car: string;
    sightseeing: string;
    transfer: string;
    all_inclusive: string;
    adults_only: string;
  };
  featured: string;
  exclusive: string;
  mytime: string;
  get_carried_away: string;
  offer_type: string;
  offer_categories: [
    {
      id: string;
      name: string;
    }
  ];
  image: {
    name: string;
    alt: string;
    file_path: string;
    photo_caption: string;
    photo_caption_color: string;
  };
  offer_description: string;
  offer_valid: {
    start: string;
    end: string;
    date_range: string;
  };
  offer_publish: {
    publish: string;
    expire: string;
  };
  trip_dates: {
    depart: string;
    return: string;
    los: string;
    los_units: string;
    date_range: string;
  };
  destinations: [
    {
      term_id: string;
      destination_name: string;
      parent: string;
      destination_code: string;
      state: string;
      country: string;
      world_region: string;
      hide_fee: string;
    }
  ];
  hotels: [
    {
      hotel_id: string;
      name: string;
      brand: {
        id: string;
        name: string;
      };
      description: string;
      star_rating: string;
      address: {
        street_number: string;
        street_name: string;
        city: string;
        state: string;
        postal_code: string;
        country: string;
        longitude: string;
        latitude: string;
      };
      dining_entertainment: string[];
      disabled_facilities: string[];
      family_facilities: string[];
      features: string[];
      liesure_recreation: string[];
      nearby: string[];
      checkin: string;
      checkout: string;
      rooms: string;
      property_specialties: string[];
      disclaimer: string;
      mytime: {
        short: string;
        long: string;
      };
    }
  ];
  top_choice: string;
  price: {
    priced_on: string;
    base_price: string;
    transfer_price: string;
    transfer_type: string;
    sightseeing_price: string;
    lowest_priced_city: string;
    total_price: string;
    advertised_price: string;
  };
  departure_cities: [
    {
      city_name: string;
      airfare_price: string;
      total_price: string;
      advertised_price: string;
      outbound_carrier: string;
      inbound_carrier: string;
      outbound_fare_class: string;
      inbound_fare_class: string;
      outbound_routing: string;
      inbound_routing: string;
    },
    {
      city_name: string;
      airfare_price: string;
      total_price: string;
      advertised_price: string;
      outbound_carrier: string;
      inbound_carrier: string;
      outbound_fare_class: string;
      inbound_fare_class: string;
      outbound_routing: string;
      inbound_routing: string;
    },
    {
      city_name: string;
      airfare_price: string;
      total_price: string;
      advertised_price: string;
      outbound_carrier: string;
      inbound_carrier: string;
      outbound_fare_class: string;
      inbound_fare_class: string;
      outbound_routing: string;
      inbound_routing: string;
    },
    {
      city_name: string;
      airfare_price: string;
      total_price: string;
      advertised_price: string;
      outbound_carrier: string;
      inbound_carrier: string;
      outbound_fare_class: string;
      inbound_fare_class: string;
      outbound_routing: string;
      inbound_routing: string;
    },
    {
      city_name: string;
      airfare_price: string;
      total_price: string;
      advertised_price: string;
      outbound_carrier: string;
      inbound_carrier: string;
      outbound_fare_class: string;
      inbound_fare_class: string;
      outbound_routing: string;
      inbound_routing: string;
    }
  ];
  special_notes: string;
  deal_id: string;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  modalStatusObj: ModalStatusType = {
    type: '',
    action: '',
  };
  mainModalNode!: any;
  mainModalObj!: any;
  authStatus: boolean = false;
  bookingStatus: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  destinationDetailIntroImage: string = '';

  constructor(private http: HttpClient) {}

  openBookingModal() {
    this.modalStatusObj.type = 'booking';
    this.modalStatusObj.action = 'booking';
    this.mainModalObj.show(this.mainModalNode);
  }

  handelSignUp(userData: SignUpUserDataType): Observable<AuthApiResponseType> {
    const signUpApiUrl = 'http://localhost:3000/api/auth/signup';
    return this.http.post<AuthApiResponseType>(signUpApiUrl, userData, {
      withCredentials: true,
    });
  }

  handelSignIn(userData: SignInUserDatType): Observable<AuthApiResponseType> {
    const signInApiUrl = 'http://localhost:3000/api/auth/signin';
    return this.http.post<AuthApiResponseType>(signInApiUrl, userData, {
      withCredentials: true,
    });
  }

  handelLogout(): Observable<AuthApiResponseType> {
    const logoutApiUrl = 'http://localhost:3000/api/auth/logout';
    return this.http.get<AuthApiResponseType>(logoutApiUrl, {
      withCredentials: true,
    });
  }

  handelUserAuthVerification(): Observable<AuthApiResponseType> {
    const authVerificationApiUrl = 'http://localhost:3000/api/auth/verify';
    return this.http.get<AuthApiResponseType>(authVerificationApiUrl, {
      withCredentials: true,
    });
  }

  handelDestinationSearch(place_name: string) {
    const SearchApiUrl = `http://localhost:3000/api/destination/search-destination?place_name=${place_name}`;
    return this.http.get(SearchApiUrl, { withCredentials: true });
  }

  getAllDestination(): Observable<DestinationRespType[]> {
    const DestinationUrl =
      'http://localhost:3000/api/destination/all-destination';
    return this.http.get<DestinationRespType[]>(DestinationUrl, {
      withCredentials: true,
    });
  }

  getDestinationDetail(
    region: string | undefined,
    country: string | undefined,
    place: string | undefined
  ): Observable<DestinationDetailResType> {
    let DestinationDetailUrl = '';
    if (region && country && place) {
      DestinationDetailUrl = `http://localhost:3000/api/destination/destination-detail?region=${region}&country=${country}&place=${place}`;
    } else if (region && country) {
      DestinationDetailUrl = `http://localhost:3000/api/destination/destination-detail?region=${region}&country=${country}`;
    } else {
      DestinationDetailUrl = `http://localhost:3000/api/destination/destination-detail?region=${region}`;
    }
    return this.http.get<DestinationDetailResType>(DestinationDetailUrl, {
      withCredentials: true,
    });
  }

  handelBooking(bookingData: any): Observable<any> {
    const BookingApiUrl = 'http://localhost:3000/api/destination/booking';
    return this.http.post<any>(BookingApiUrl, bookingData, {
      withCredentials: true,
    });
  }

  getDeals(type: string, limit:number): Observable<Deals[]> {
    const dealsApiUrl = `http://localhost:3000/api/deal/get-deals?type=${type}&limit=${limit}`;
    return this.http.get<Deals[]>(dealsApiUrl, { withCredentials: true });
  }

  getDealsDetail(code: string): Observable<DealDetailType> {
    const dealDetailApiUrl = `http://localhost:3000/api/deal/deal-detail?code=${code}`;
    return this.http.get<DealDetailType>(dealDetailApiUrl, {
      withCredentials: true,
    });
  }

  getVacationTypeDetail(vacationType: string): Observable<VacationTypeDetail> {
    const vacationTypeDetailApiUrl = `http://localhost:3000/api/deal/vacation-type-detail?vacationType=${vacationType}`;
    return this.http.get<VacationTypeDetail>(vacationTypeDetailApiUrl, {
      withCredentials: true,
    });
  }
}
