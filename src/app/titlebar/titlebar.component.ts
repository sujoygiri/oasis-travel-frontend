import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { MenubarModule } from "primeng/menubar";
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-titlebar',
  standalone: true,
  imports: [
    MenubarModule,
    ButtonModule,
    DividerModule
  ],
  templateUrl: './titlebar.component.html',
  styleUrl: './titlebar.component.css'
})
export class TitlebarComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      {
        label: 'Destinations',
        icon: 'pi pi-fw pi-globe',
        routerLink: 'destinations'
      },
      {
        label: 'More',
        icon: 'pi pi-fw pi-bars',
        items: [
          {
            label: 'About',
            icon: 'pi pi-fw pi-info',
            routerLink: 'about'
          },
          {
            label: 'Contact',
            icon: 'pi pi-fw pi-envelope',
            routerLink: 'contact'
          }
        ]
      }
    ];
  }
}
