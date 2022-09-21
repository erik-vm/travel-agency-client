import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FooterComponent } from './footer/footer.component';
import { BrowseTripsComponent } from './trips/browse-trips/browse-trips.component';
import { SearchTripsComponent } from './trips/search-trips/search-trips.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TripFormComponent } from './trips/trip-form/trip-form.component';
import { CountryFormComponent } from './countries/country-form/country-form.component';
import { CityFormComponent } from './cities/city-form/city-form.component';
import { AirportTableComponent } from './airports/airport-table/airport-table.component';
import { AirportFormComponent } from './airports/airport-form/airport-form.component';
import { CityTableComponent } from './cities/city-table/city-table.component';
import { CountryTableComponent } from './countries/country-table/country-table.component';
import { HotelTableComponent } from './hotels/hotel-table/hotel-table.component';
import { HotelFormComponent } from './hotels/hotel-form/hotel-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    BrowseTripsComponent,
    SearchTripsComponent,
    TripFormComponent,
    CountryFormComponent,
    CityFormComponent,
    AirportTableComponent,
    AirportFormComponent,
    CityTableComponent,
    CountryTableComponent,
    HotelTableComponent,
    HotelFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
