import { Component, OnInit } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import { GlobalService, ModalStatusType } from '../global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-titlebar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    RouterLinkActive
  ],
  // providers:[GlobalService],
  templateUrl: './titlebar.component.html',
  styleUrl: './titlebar.component.css'
})
export class TitlebarComponent implements OnInit {

  constructor(public globalService:GlobalService, private router:Router){}

  ngOnInit(): void {

  }

  handelLogout(){
    this.globalService.handelLogout().subscribe({
      next: (value) => {
        if(value.success){
          this.globalService.authStatus = false;
          this.router.navigate(['/'])
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
