import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}      from '@angular/router';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {

	id: number;

	constructor(private route: ActivatedRoute) {  }

	ngOnInit() {
		this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
	}

}
