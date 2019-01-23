import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule,
  MatDialogModule,
  MatRadioModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatTabsModule,
  MatNativeDateModule,
  MatIconModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatTableModule,
  MatListModule,
  MatOptionModule,
  MatSliderModule,
  MatAutocompleteModule,
  MatButtonToggleModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherDialogComponent } from './components/weather-dialog/weather-dialog.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [AppComponent, MapPageComponent, WeatherDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // Material Design Modules
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatTabsModule,
    MatNativeDateModule,
    MatIconModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatListModule,
    MatOptionModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatButtonToggleModule,

    PerfectScrollbarModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,
    MapPageComponent,
    FormsModule,
    ReactiveFormsModule,

    // Material Design Modules
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatTabsModule,
    MatNativeDateModule,
    MatIconModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatListModule,
    MatOptionModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatButtonToggleModule,

    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [WeatherDialogComponent]
})
export class AppModule {}
