import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destination-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './destination-search.component.html',
  styleUrl: './destination-search.component.css',
})
export class DestinationSearchComponent implements OnInit {
  foundDestination: any = [];

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.searchDestination('');
  }

  handelSearch(event:any){
    let searchedPlaceName = event?.target?.value;
    this.searchDestination(searchedPlaceName)
  }

  searchDestination(destinationName:string) {
    this.globalService.handelDestinationSearch(destinationName).subscribe({
      next: (value) => {
        this.foundDestination = value;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  closeSearchModal(){
    this.globalService.mainModalObj.hide(this.globalService.mainModalNode)
  }
}
