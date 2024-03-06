import {Component, Input, OnInit} from '@angular/core';

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
  ngOnInit() {
    // console.log(this.introTitle)
  }
}
