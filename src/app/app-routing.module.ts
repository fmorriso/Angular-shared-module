import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
//import {CrisisModule} from './crisis/crisis.module';

const routes: Routes = [
	{ path: '',  pathMatch: 'full', redirectTo: 'contact' },
	// { path: 'crisis', loadChildren: './crisis/crisis.module#CrisisModule' },
	{ path: '**', pathMatch: 'full', component: PageNotFoundComponent }
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

export const routableComponents = [PageNotFoundComponent];
