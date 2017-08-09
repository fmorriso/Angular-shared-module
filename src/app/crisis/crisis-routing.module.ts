import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import {CrisisComponent} from './crisis.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisComponent} from './crisis.component';


//Will this work too?
const routes: Routes = [
	{
		path: 'crisis',
		component: CrisisComponent,
		children: [
			{path: '', component: CrisisListComponent},
			{path: ':id', component: CrisisDetailComponent}
		]
	}
];

/*const routesOriginal: Routes = [
	{path: '', redirectTo: 'list', pathMatch: 'full'},
	{path: 'list', component: CrisisListComponent},
	{path: ':id', component: CrisisDetailComponent}
];*/

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CrisisRoutingModule {
}

export const routedComponents = [
	CrisisComponent,
	CrisisListComponent,
	CrisisDetailComponent
];
