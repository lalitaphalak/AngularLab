import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { RootComponent } from './root.component';
import { LoginComponent } from './login/login.component';
import { ValidateDirective } from './validate.directive';
import { CountriesComponent } from './countries/countries.component';
import { CitiesComponent } from './cities/cities.component';

import { MyService } from './my-service.service';
import { FilterPipe } from './filter.pipe';
import { CountryCodesComponent } from './country-codes/country-codes.component';
import { CountryCodesService } from './country-codes.service';
import { CountryCodesSearchComponent } from './country-codes-search/country-codes-search.component';
import routes from './appRoutes';
import { RouterModule } from '@angular/router';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    ValidateDirective,
    CountriesComponent,
    CitiesComponent,
    FilterPipe,
    CountryCodesComponent,
    CountryCodesSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [MyService, CountryCodesService, CanDeactivateGuardService],
  bootstrap: [RootComponent]
})
export class Angular2Module { }
