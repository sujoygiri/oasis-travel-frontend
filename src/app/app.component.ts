import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitlebarComponent } from './titlebar/titlebar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TitlebarComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oasis-travel';
}
