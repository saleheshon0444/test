import { SecondSidenavComponent } from './../components/second-sidenav/second-sidenav.component';
import { CustomSidenavComponent } from './../compnents/custom-sidenav/custom-sidenav.component';
import { Component, computed, signal,inject } from '@angular/core';
import { MainDataService } from './../main-data.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    CustomSidenavComponent,
    SecondSidenavComponent
  ],
  template: `
    <mat-toolbar class="mat-elevation-z3">
      <button mat-icon-button (click)="collapsed.set(!collapsed())">
        <mat-icon>menu</mat-icon>
      </button>
    </mat-toolbar>
    <mat-sidenav-container>
      <mat-sidenav opened mode="side" [style.width]="sidenavWidth()">
        <app-custom-sidenav />
      </mat-sidenav>

      <mat-sidenav-content  [style.margin-left]="sidenavWidth()"> 
        <mat-sidenav-container>
          <mat-sidenav opened mode="side" [style.width]="sidenavWidth()">
            <app-second-sidenav />
          </mat-sidenav>
          <mat-sidenav-content
            class="content"
            [style.margin-left]="sidenavWidth()"
          ><h1>Test</h1>
          </mat-sidenav-content>
        </mat-sidenav-container>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrl: './dashbord.component.css',
})
export class DashbordComponent {
  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));
}
