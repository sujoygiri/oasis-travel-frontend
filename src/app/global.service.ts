import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getAllDestination():Observable<DestinationRespType[]> {
    const DestinationUrl = 'http://localhost:3000/api/destination/all-destination';
    return this.http.get<DestinationRespType[]>(DestinationUrl, { withCredentials: true });
  }
}
