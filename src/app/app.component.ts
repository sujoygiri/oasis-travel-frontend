import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { ModalComponent } from './shared-component/modal/modal.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TitlebarComponent,
    RouterOutlet,
    ModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oasis-travel';
}
