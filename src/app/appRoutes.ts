import { RootComponent } from './root.component';
import { LoginComponent } from './login/login.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryCodesComponent } from './country-codes/country-codes.component';
import { CountryCodesSearchComponent } from './country-codes-search/country-codes-search.component';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';


const appRoutes: Routes = [
	{path: '', component: RootComponent},
	{path: 'login', component: LoginComponent, canDeactivate: [CanDeactivateGuardService]},
	{path: 'countries', component: CountriesComponent},
	{path: 'country-codes',
		children: [
			{path: '', component: CountryCodesComponent},
			{path: 'search', component: CountryCodesSearchComponent}
		]
	},
];

export default RouterModule.forRoot(appRoutes);