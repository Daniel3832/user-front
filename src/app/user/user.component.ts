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

		console.log("getuser in usercomponent")
	}

	onSelect(user): void {
		this.selectedUser = user
	}

	createUser(id: number, name: string, phone: number, email:string): void {
		let new_user = { id, name, phone, email }
		this.userService.addUser(new_user)
		.subscribe(
			(data: User) => console.log(data),
			(error: any) => console.log(error)
		)
		// this.users.push(new_user)
		// console.log(new_user.name)
	}
}
