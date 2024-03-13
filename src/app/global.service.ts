import { Injectable } from '@angular/core';

export interface ModalStatusType{
  type:string
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  modalStatusObj!:ModalStatusType;
  mainModalNode!:any;
  mainModalObj!:any;
  constructor() { }
}
