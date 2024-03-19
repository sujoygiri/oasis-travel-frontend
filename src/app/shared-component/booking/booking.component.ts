import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GlobalService } from '../../global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup = new FormGroup({});
  allDestinationName:string[] = []

  constructor(private formBuilder: FormBuilder, private globalService:GlobalService) { }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      totalTraveler: ['', [Validators.required]],
      planningMode: ['', [Validators.required]]
    });
    this.globalService.getAllDestination().subscribe({
      next:(value) => {
        value.forEach(destination => {
          this.allDestinationName.push(destination.name)
        })
      }
    })
  }

  handelBooking() {
    console.log(this.bookingForm.value);
    this.globalService.handelBooking(this.bookingForm.value).subscribe({
      next: (value) => {
        if(value.success){
          this.globalService.bookingStatus = true;
          this.globalService.successMessage = value.message;
          this.globalService.modalStatusObj.type = 'booking_done'
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
