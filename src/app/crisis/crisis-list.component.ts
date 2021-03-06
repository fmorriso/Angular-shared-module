import {Component, OnInit} from '@angular/core';

import {Crisis} from './crisis';
import {CrisisService} from './crisis.service';

@Component({
	selector: 'app-crisis-list',
	templateUrl: './crisis-list.component.html',
	styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

	crisises: Promise<Crisis[]>;

	constructor(private crisisService: CrisisService) {
	}

	ngOnInit() {
		this.crisises = this.crisisService.getCrises();
	}

}
