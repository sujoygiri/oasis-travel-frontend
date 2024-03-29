import {Component, Input, OnInit} from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-page-intro-section',
  standalone: true,
  imports: [],
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.css'
})
export class IntroSectionComponent implements OnInit{
  @Input()
  introTitle:string = ""
  @Input()
  introText:string = ""
  @Input()
  introImage:string = ""

  constructor(public globalService:GlobalService){}

  ngOnInit() {
  }

}
