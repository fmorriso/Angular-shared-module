import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-crisis',
	templateUrl: './crisis.component.html',
	styleUrls: ['./crisis.component.scss']
})
export class CrisisComponent implements OnInit {
	private compName: string = 'CrisisComponent';

	constructor() {
		console.log(`${this.compName} - constructor`);
	}

	ngOnInit() {
		console.log(`${this.compName} - ngOnInit`);
	}

}
