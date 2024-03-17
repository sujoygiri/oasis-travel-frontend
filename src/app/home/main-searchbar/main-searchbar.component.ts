import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-main-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './main-searchbar.component.html',
  styleUrl: './main-searchbar.component.css',
})
export class MainSearchbarComponent {
  constructor(private globalService: GlobalService) {}

  openSearchModal() {
    this.globalService.modalStatusObj = {
      type:"query",
      action:"destination_search"
    }
    this.globalService.mainModalObj.show(this.globalService.mainModalNode);
  }
}
