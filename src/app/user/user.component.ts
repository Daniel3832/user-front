import { Component, OnInit } from '@angular/core';

import { User } from './../user';
import { UserService } from './../user.service';


@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	users: User[]
	selectedUser: User

	constructor(private userService: UserService) { }

	ngOnInit() {
		this.getUsers()
	}

	getUsers(): void { 
		this.userService.getUsers()
		.subscribe(users => this.users = users)
	}

	onSelect(user): void {
		this.selectedUser = user
	}

	createUser(name: string, phone: number, email:string): void {
		// let new_user = {
		// 	name: name,
		// 	phone: phone,
		// 	email: email
		// }
		let new_user = { name, phone, email }

		this.users.push(new_user)
		console.log(new_user.name + "hello new")
	}
}
