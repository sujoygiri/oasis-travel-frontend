import { Component, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";
import { GlobalService, ModalStatusType } from '../global.service';

@Component({
  selector: 'app-titlebar',
  standalone: true,
  imports: [
    RouterLink
  ],
  // providers:[GlobalService],
  templateUrl: './titlebar.component.html',
  styleUrl: './titlebar.component.css'
})
export class TitlebarComponent implements OnInit {

  constructor(public globalService:GlobalService){}

  ngOnInit(): void {

  }

  openAuthenticationModal(type:string){
    let modalStatus:ModalStatusType = {
      type
    }
    this.globalService.modalStatusObj = modalStatus;
    this.globalService.mainModalObj.show(this.globalService.mainModalNode)
  }
}
