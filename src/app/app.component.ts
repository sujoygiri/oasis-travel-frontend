import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { ModalComponent } from './shared-component/modal/modal.component';
import { AuthApiResponseType, GlobalService } from './global.service';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TitlebarComponent,
    RouterOutlet,
    FooterComponent,
    ModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'oasis-travel';

  constructor(private globalService:GlobalService){}

  ngOnInit(): void {
    this.globalService.handelUserAuthVerification().subscribe({
      next: (value:AuthApiResponseType) => {
        if(value.success){
          this.globalService.authStatus = value.success;
          // this.globalService.successMessage = value.message;
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
