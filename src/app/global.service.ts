import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ModalStatusType {
  type: string;
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

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  modalStatusObj!: ModalStatusType;
  mainModalNode!: any;
  mainModalObj!: any;

  constructor(private http: HttpClient) {}

  handelSignUp(userData: SignUpUserDataType) {
    const signUpApiUrl = 'http://localhost:3000/api/auth/verify';
    return this.http.get(signUpApiUrl, { withCredentials: true });
  }

  handelSignIn(userData: SignInUserDatType) {
    const signInApiUrl = 'http://localhost:3000/api/auth/signin';
    return this.http.post(signInApiUrl, userData, { withCredentials: true });
  }
}
