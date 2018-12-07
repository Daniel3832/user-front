import { UserService } from './../user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


import { User } from './../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	@Input() user: User
	
  	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		private location: Location
	  ) { }

  	ngOnInit() {
  	}

	goBack(): void {
	this.location.back();
	}

	save(): void {
		this.userService.updateUser(this.user)
		  .subscribe(() => this.goBack());
	}
}
