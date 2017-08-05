import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisComponent }     from './crisis.component';
import { CrisisService }       from './crisis.service';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';

@NgModule({
	imports: [ CommonModule, CrisisRoutingModule ],
	declarations: [ CrisisComponent, CrisisListComponent, CrisisDetailComponent ],
	providers: [ CrisisService ]
})
export class CrisisModule {
}
