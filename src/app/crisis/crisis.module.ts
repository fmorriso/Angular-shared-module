import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { CrisisService }       from './crisis.service';
import {CrisisRoutingModule, routedComponents} from './crisis-routing.module';
//import { CrisisComponent }     from './crisis.component';

//import { CrisisListComponent } from './crisis-list.component';
//import { CrisisDetailComponent } from './crisis-detail.component';

@NgModule({
	imports: [ CommonModule, CrisisRoutingModule ],
	exports:[],
	declarations: [ routedComponents ],
	providers: [ CrisisService ]
})
export class CrisisModule {
}
