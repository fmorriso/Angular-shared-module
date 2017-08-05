import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import {CrisisModule} from './crisis/crisis.module';

const routes: Routes = [
	{ path: '', redirectTo: 'contact', pathMatch: 'full' },
	{ path: 'crisis', loadChildren: './crisis/crisis.module#CrisisModule' },
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
