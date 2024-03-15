import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthApiResponseType, GlobalService } from '../../../global.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup = new FormGroup({});
  showSubmitBtnSpinner:boolean = false;

  constructor(private formBuilder: FormBuilder, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['',[Validators.required]]
    });
  }

  handelSignIn() {
    this.showSubmitBtnSpinner = true;
    this.globalService.handelSignIn(this.signInForm.value).subscribe({
      next: (value:AuthApiResponseType) => {
        if(value.success){
          this.globalService.authStatus = value.success;
          this.globalService.successMessage = value.message;
        }
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.showSubmitBtnSpinner = false;
      }
    });
  }
}
