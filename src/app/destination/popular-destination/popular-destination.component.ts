import {Component, OnInit} from '@angular/core';
import {destinationData} from "./destination-data";
@Component({
  selector: 'app-popular-destination',
  standalone: true,
  imports: [],
  templateUrl: './popular-destination.component.html',
  styleUrl: './popular-destination.component.css'
})
export class PopularDestinationComponent implements OnInit{
  ngOnInit() {
    console.log(destinationData)
  }
}
