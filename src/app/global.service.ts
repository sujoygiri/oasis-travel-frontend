import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

export interface AuthApiResponseType{
  success:boolean;
  message:string;
  userName?:string;
  userEmail?:string;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  modalStatusObj!: ModalStatusType;
  mainModalNode!: any;
  mainModalObj!: any;
  authStatus:boolean = false;
  successMessage:string = "";
  errorMessage:string = "";

  constructor(private http: HttpClient) {}

  handelSignUp(userData: SignUpUserDataType):Observable<AuthApiResponseType> {
    const signUpApiUrl = 'http://localhost:3000/api/auth/signup';
    return this.http.post<AuthApiResponseType>(signUpApiUrl, userData, { withCredentials: true });
  }

  handelSignIn(userData: SignInUserDatType):Observable<AuthApiResponseType> {
    const signInApiUrl = 'http://localhost:3000/api/auth/signin';
    return this.http.post<AuthApiResponseType>(signInApiUrl, userData, { withCredentials: true });
  }

  handelUserAuthVerification():Observable<AuthApiResponseType>{
    const authVerificationApiUrl = 'http://localhost:3000/api/auth/verify';
    return this.http.get<AuthApiResponseType>(authVerificationApiUrl,{withCredentials:true})
  }
}
