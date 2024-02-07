import { Component, Input, signal,inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MainDataService } from '../../main-data.service';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};
@Component({
  selector: 'app-second-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  template: `
    <div class="sidenav-header">
      <mat-nav-list>
        @if (this.mainDataService.contentseleceted) { @for (item of menuItems(); track item) {
        <a  mat-list-item>
          <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
          <span matListItemTitle>{{ item.label }}</span>
        </a>
        } } @else { @for (item of seccondmenuItems(); track item) {
        <a  mat-list-item>
          <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
          <span matListItemTitle>{{ item.label }}</span>
        </a>
        } }
      </mat-nav-list>
    </div>
  `,
  styles: [],
})
export class SecondSidenavComponent {
  sideNavcollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavcollapsed.set(val);
  }
  menuItems = signal<MenuItem[]>([
    {
      icon: 'delete',
      label: 'Deleted',
      route: 'deleted',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
    },
  ]);
  seccondmenuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: 'Home',
    },
    {
      icon: 'favorite',
      label: 'Favorite',
      route: 'Favorite',
    },
  ]);
  mainDataService = inject(MainDataService);
  contentseleceted = this.mainDataService.contentseleceted;
  
}
