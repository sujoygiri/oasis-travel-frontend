import { Component, Input, OnInit, input } from '@angular/core';
import { IntroSectionComponent } from '../../shared-component/page-intro-section/intro-section.component';
import { GlobalService } from '../../global.service';
import { DealsComponent } from '../deals/deals.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacation-type-details',
  standalone: true,
  imports: [IntroSectionComponent, DealsComponent],
  templateUrl: './vacation-type-details.component.html',
  styleUrl: './vacation-type-details.component.css'
})
export class VacationTypeDetailsComponent implements OnInit {
  @Input()
  introTitle: string = '';
  @Input()
  introText: string = '';
  @Input()
  introImage: string = '';
  @Input()
  vacationType: string = '';
  vacationTypeTitle:string = '';
  vacationTypeText:string = '';
  vacationTypeImage:string = ''

  constructor(private globalService: GlobalService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (value) => {
        this.vacationType = value['vacationType'];
      },
    });
    this.globalService.getVacationTypeDetail(this.vacationType).subscribe({
      next: (value) => {
        this.introTitle = value.title;
        this.introText = value.text;
        this.introImage = value.imageUrl;
        this.vacationTypeTitle = value.detailTitle;
        this.vacationTypeText = value.detailText;
        this.vacationTypeImage = value.detailImageUrl;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
