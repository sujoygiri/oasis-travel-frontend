import { Component, AfterViewInit } from '@angular/core';
import { GlobalService } from '../../global.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DestinationSearchComponent } from '../destination-search/destination-search.component';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    SignUpComponent,
    SignInComponent,
    DestinationSearchComponent,
    BookingComponent,
    TitleCasePipe
  ],
  // providers: [GlobalService],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements AfterViewInit {
  showSignInForm: boolean = false;
  showSignUpForm: boolean = false;
  showDestinationSearch: boolean = false;
  showBookingForm: boolean = false;
  modalTitle: string = '';
  constructor(public globalService: GlobalService) { }

  ngAfterViewInit(): void {
    const mainModalNode = document.getElementById('main_modal');
    this.globalService.mainModalNode = mainModalNode;
    // @ts-ignore
    this.globalService.mainModalObj = new bootstrap.Modal(mainModalNode);
    mainModalNode?.addEventListener('show.bs.modal', (event) => {
      this.openModal();
    });
  }

  openModal() {
    const { type, action } = this.globalService.modalStatusObj;
    switch (action) {
      case 'sign_in':
        this.changeToSignIn();
        break;
      case 'sign_up':
        this.changeToSignUp();
        break;
      case 'destination_search':
        this.changeToDestinationSearch();
        break;
      case 'booking':
        this.changeToBooking();
        break;
      default:
        break;
    }
  }

  changeToSignIn() {
    this.showSignInForm = true;
    this.showSignUpForm = false;
    this.globalService.modalStatusObj.action = 'sign_in';
    this.modalTitle = 'Sign In';
  }

  changeToSignUp() {
    this.showSignUpForm = true;
    this.showSignInForm = false;
    this.globalService.modalStatusObj.action = 'sign_up';
    this.modalTitle = 'Sign Up';
  }

  changeToDestinationSearch() {
    this.modalTitle = "Search Your Destination";
    this.showDestinationSearch = true;
  }

  changeToBooking() {
    this.modalTitle = "Start Planning";
    this.showBookingForm = true;
  }
}
