import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/contact', pathMatch: 'full' }
];

const routeConfig = {enableTracing: true};

@NgModule({
	imports: [RouterModule.forRoot(routes, routeConfig)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
