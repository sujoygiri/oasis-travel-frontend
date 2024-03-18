import { Component, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";
import { GlobalService, ModalStatusType } from '../global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-titlebar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  // providers:[GlobalService],
  templateUrl: './titlebar.component.html',
  styleUrl: './titlebar.component.css'
})
export class TitlebarComponent implements OnInit {

  constructor(public globalService:GlobalService){}

  ngOnInit(): void {

  }

  handelLogout(){
    this.globalService.handelLogout().subscribe({
      next: (value) => {
        if(value.success){
          this.globalService.authStatus = false;
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  openAuthenticationModal(action:string){
    let modalStatus:ModalStatusType = {
      type:'authentication',
      action
    }
    this.globalService.modalStatusObj = modalStatus;
    this.globalService.mainModalObj.show(this.globalService.mainModalNode)
  }
}
