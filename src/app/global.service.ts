import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ModalStatusType{
  type:string
}

export interface SignInUserDatType{
  username:string,
  email:string
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  modalStatusObj!:ModalStatusType;
  mainModalNode!:any;
  mainModalObj!:any;
  
  constructor(private http:HttpClient) { }

  handelSignIn(userData:SignInUserDatType){
    console.log(userData);
    const signInApiUrl = "http://localhost:3000/api/auth/signin";
    return this.http.post(signInApiUrl,userData,{withCredentials:true});
  }
}
