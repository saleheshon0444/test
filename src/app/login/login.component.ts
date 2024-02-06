import { RouterModule, provideRouter } from '@angular/router';
import { MainDataService } from './../main-data.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  template: `
    <div class="Container">
      <form
        class="FormGroup"
        [formGroup]="applyForm"
        (submit)="submitApplication()"
      >
        <h1 class="Header">Welccome</h1>
        <mat-form-field>
          <mat-label>Enter your UserName</mat-label>
          <input matInput type="text" />
        </mat-form-field>
        <mat-form-field>
          <mat-label>Enter your password</mat-label>
          <input matInput [type]="hide ? 'password' : 'text'" />
          <button
            mat-icon-button
            matSuffix
            (click)="hide = !hide"
            [attr.aria-label]="'Hide password'"
            [attr.aria-pressed]="hide"
          >
            <mat-icon>{{ hide ? 'visibility_off' : 'visibility' }}</mat-icon>
          </button>
        </mat-form-field>
        <button routerLink="/dashbord" color="primary" mat-raised-button type="submit">Log in</button>
      </form>
    </div>
  `,
  styleUrl: './login.component.css',
})
export class LoginComponent {
  hide = true;
  applyForm = new FormGroup({
    userName: new FormControl(''),
    passWord: new FormControl(''),
  });
  mainDataService = inject(MainDataService);
  submitApplication() {
    this.mainDataService.submitApplication(
      this.applyForm.value.userName ?? '',
      this.applyForm.value.passWord ?? ''
    );
  }
}
