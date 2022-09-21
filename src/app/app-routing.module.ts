import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportFormComponent } from './airports/airport-form/airport-form.component';
import { AirportTableComponent } from './airports/airport-table/airport-table.component';
import { CityFormComponent } from './cities/city-form/city-form.component';
import { CityTableComponent } from './cities/city-table/city-table.component';
import { CountryFormComponent } from './countries/country-form/country-form.component';
import { CountryTableComponent } from './countries/country-table/country-table.component';
import { HomeComponent } from './home/home.component';
import { HotelFormComponent } from './hotels/hotel-form/hotel-form.component';
import { HotelTableComponent } from './hotels/hotel-table/hotel-table.component';
import { BrowseTripsComponent } from './trips/browse-trips/browse-trips.component';
import { TripFormComponent } from './trips/trip-form/trip-form.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path: 'trips',
    component: BrowseTripsComponent
  },
  {
    path: 'trips/add',
    component: TripFormComponent
  },
  {
    path: 'trips/edit/:id',
    component: TripFormComponent
  },
  {
    path: 'countries',
    component: CountryTableComponent
  },
  {
    path: 'countries/add',
    component: CountryFormComponent
  },
  {
    path: 'countries/edit/:id',
    component: CountryFormComponent
  },
  {
    path: 'cities',
    component: CityTableComponent
  },
  {
    path: 'cities/add',
    component: CityFormComponent
  },
  {
    path: 'cities/edit/:id',
    component: CityFormComponent
  },
  {
    path: 'airports',
    component: AirportTableComponent
  },
  {
    path: 'airports/add',
    component: AirportFormComponent
  },
  {
    path: 'airports/edit/:id',
    component: AirportFormComponent
  },
  {
    path: 'hotels',
    component: HotelTableComponent
  },
  {
    path: 'hotels/add',
    component: HotelFormComponent
  },
  {
    path: 'hotels/edit/:id',
    component: HotelFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
