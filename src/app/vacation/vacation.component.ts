import { Component } from '@angular/core';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { DealsComponent } from './deals/deals.component';

@Component({
  selector: 'app-vacation',
  standalone: true,
  imports: [IntroSectionComponent,DealsComponent],
  templateUrl: './vacation.component.html',
  styleUrl: './vacation.component.css'
})
export class VacationComponent {

}
