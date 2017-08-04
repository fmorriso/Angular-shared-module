import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisComponent } from './crisis.component';

@NgModule({
	imports: [ CommonModule, CrisisRoutingModule ],
	declarations: [CrisisComponent]
})
export class CrisisModule {
}
