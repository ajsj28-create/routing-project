import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UserDashComponent } from './shared/components/user-dash/user-dash.component';
import { UserInfoComponent } from './shared/components/user-info/user-info.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ConfirmComponent } from './shared/components/confirm/confirm.component';
import { FairsDashComponent } from './shared/components/fairs-dash/fairs-dash.component';
import { FairsDetailComponent } from './shared/components/fairs-detail/fairs-detail.component';
import { FairsCardComponent } from './shared/components/fairs-card/fairs-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDashComponent,
    UserInfoComponent,
    UserFormComponent,
    PageNotFoundComponent,
    ConfirmComponent,
    FairsDashComponent,
    FairsDetailComponent,
    FairsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
