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
  introImage:string,
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
  successMessage: string = '';
  errorMessage: string = '';
  destinationDetailIntroImage:string = '';

  constructor(private http: HttpClient) {}

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
  ):Observable<DestinationDetailResType> {
    let DestinationDetailUrl = ''
    if(region && country && place){
      DestinationDetailUrl = `http://localhost:3000/api/destination/destination-detail?region=${region}&country=${country}&place=${place}`;
    }else if(region && country){
      DestinationDetailUrl = `http://localhost:3000/api/destination/destination-detail?region=${region}&country=${country}`;
    }else{
      DestinationDetailUrl = `http://localhost:3000/api/destination/destination-detail?region=${region}`;
    }
    return this.http.get<DestinationDetailResType>(DestinationDetailUrl, { withCredentials: true });
  }
}
