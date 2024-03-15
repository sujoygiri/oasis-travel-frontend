import { Component, AfterViewInit } from '@angular/core';
import { GlobalService } from '../../global.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [SignUpComponent, SignInComponent, CommonModule],
  // providers: [GlobalService],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements AfterViewInit {
  showSignInForm: boolean = false;
  showSignUpForm: boolean = false;
  modalTitle: string = '';
  constructor(public globalService: GlobalService) {}

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
    const { type } = this.globalService.modalStatusObj;
    if (type === 'sign_in') {
      this.changeToSignIn()
    } else {
      this.changeToSignUp()
    }
  }

  changeToSignIn() {
    this.showSignInForm = true;
    this.showSignUpForm = false;
    this.modalTitle = 'Sign In';
  }

  changeToSignUp() {
    this.showSignUpForm = true;
    this.showSignInForm = false;
    this.modalTitle = 'Sign Up';
  }
}
