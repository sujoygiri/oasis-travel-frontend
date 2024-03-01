import { Component } from '@angular/core';
import { IntroSectionComponent } from './intro-section/intro-section.component';

@Component({
  selector: 'app-vacation',
  standalone: true,
  imports: [IntroSectionComponent],
  templateUrl: './vacation.component.html',
  styleUrl: './vacation.component.css'
})
export class VacationComponent {

}
