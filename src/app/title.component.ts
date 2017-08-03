import {Component, Input, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
	@Input() subtitle = '';
	title = 'NgModules';
	user = '';

	constructor(private userService: UserService) {
	}

	ngOnInit() {
		this.user = this.userService.userName;
	}

}
