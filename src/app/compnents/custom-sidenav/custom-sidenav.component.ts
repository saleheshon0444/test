import { Component, signal, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MainDataService } from '../../main-data.service';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  template: `
    <div class="sidenav-header">
      <mat-nav-list>
        @for (item of menuItems(); track item) {
        <a (click)="clicked()" mat-list-item>
          <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
          <span matListItemTitle>{{ item.label }}</span>
        </a>
        }
      </mat-nav-list>
    </div>
  `,
  styles: [],
})
export class CustomSidenavComponent {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
    },
  ]);
  mainDataService = inject(MainDataService);
  clicked() {
    this.mainDataService.contentseleceted = true;
    console.log('bus');
  }
}
