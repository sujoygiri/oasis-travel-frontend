import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AuthApiResponseType, GlobalService } from '../../../global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit, AfterViewInit {
  signUpForm!: FormGroup;
  showSubmitBtnSpinner:boolean = false;
  constructor(
    private globalService: GlobalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, isValidPassword]],
      retype_password: ['', [Validators.required, isPasswordSame]],
    });
  }

  ngAfterViewInit(): void {

  }

  handelSignUp() {
    this.showSubmitBtnSpinner = true;
    let { username, email, password } = this.signUpForm.value;
    this.globalService.handelSignUp({username,email,password}).subscribe({
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

function isPasswordSame(control: FormControl): ValidationErrors | null {
  const passwordNode: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
  const password = passwordNode.value;
  const retypePassword = control.value;
  if (password !== retypePassword) {
    return { passwordNotMatch: { value: control.value, requiredValue: password } };
  }
  return null;
}

function isValidPassword(control: FormControl): ValidationErrors | null {
  let password: string = control.value;
  let errors: string[] = [];
  if (password.length < 8) {
    errors.push("Your password must be at least 8 characters long");
  } else if (password.search(/[a-z]/) < 0) {
    errors.push("Your password must contain at least one lowercase letter.");
  } else if (password.search(/[A-Z]/) < 0) {
    errors.push("Your password must contain at least one uppercase letter.");
  } else if (password.search(/[0-9]/) < 0) {
    errors.push("Your password must contain at least one digit.");
  } else if (password.search(/[-_@&%'"`~[\]{}()*+?.,\\^$|#\s]/g) < 0) {
    errors.push("Your password must contain at least one special character.");
  }
  if (errors.length) {
    return { invalidPassword: { value: errors[0] } };
  }
  return null;
}