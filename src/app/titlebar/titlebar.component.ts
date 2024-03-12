import { Component, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-titlebar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './titlebar.component.html',
  styleUrl: './titlebar.component.css'
})
export class TitlebarComponent implements OnInit {
  ngOnInit(): void {

  }
}
