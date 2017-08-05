import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrisisModule} from './crisis/crisis.module';

// https://github.com/johnpapa/angular-first-look-examples/tree/master/_examples/router-lazy/app
// https://angular.io/api/router/Routes
// ERROR in Could not resolve "crisis" from "C:/projects/Angular-shared-module/src/app/app-routing.module.ts".
const routes: Routes = [
	{ path: '', redirectTo: 'contact', pathMatch: 'full' },
	{ path: 'crisis',
    loadChildren: './crisis/crisis.module#CrisisModule'
	}
];
/*
{ path: 'crisis', loadChildren: './crisis/crisis.module#CrisisModule' },
is the same as
{ path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
*/

const routeConfig = {enableTracing: true};

@NgModule({
	imports: [RouterModule.forRoot(routes, routeConfig)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
