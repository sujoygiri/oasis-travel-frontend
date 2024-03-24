import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

interface vacationType{
  id:number,
  type:string,
  imageUrl:string,
  urlPath:string
}
@Component({
  selector: 'app-vacation-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacation-type.component.html',
  styleUrl: './vacation-type.component.css'
})
export class VacationTypeComponent {
  vacationTypeRow1:vacationType[] = [
    {
      id:1,
      type:'All Inclusive',
      imageUrl:'assets/all-inclusive-drilldown.jpg',
      urlPath:'all-inclusive'
    },
    {
      id:2,
      type:'Family',
      imageUrl:'assets/family-drilldown.jpg',
      urlPath:'family'
    },
    {
      id:3,
      type:'Adults Only',
      imageUrl:'assets/adult-only-drilldown.jpg',
      urlPath:'adults-only'
    }
  ]
  vacationTypeRow2:vacationType[] = [
    {
      id:1,
      type:'Honeymoon',
      imageUrl:'assets/honeymoon-drilldown.jpg',
      urlPath:'honeymoon'
    },
    {
      id:2,
      type:'Last Minute',
      imageUrl:'assets/last-minute-drilldown.jpg',
      urlPath:'last-minute'
    },
    {
      id:3,
      type:'Beach',
      imageUrl:'assets/woman-swing-at-the-beach.jpg',
      urlPath:'beach'
    },
    {
      id:4,
      type:'Luxury',
      imageUrl:'assets/luxury-drilldown.jpg',
      urlPath:'luxury'
    }
  ]
}
