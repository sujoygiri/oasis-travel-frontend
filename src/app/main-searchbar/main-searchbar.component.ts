import { Component } from '@angular/core';
// import { InputGroupModule } from 'primeng/inputgroup';
// import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
// import { InputTextModule } from 'primeng/inputtext';
// import { SplitButtonModule } from 'primeng/splitbutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-main-searchbar',
  standalone: true,
  imports: [
    // InputGroupModule, 
    // InputGroupAddonModule, 
    // InputTextModule, 
    // SplitButtonModule,
    AutoCompleteModule
  ],
  templateUrl: './main-searchbar.component.html',
  styleUrl: './main-searchbar.component.css'
})
export class MainSearchbarComponent {

}
