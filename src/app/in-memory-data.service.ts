// import { Injectable } from '@angular/core';
// import { InMemoryDbService } from 'angular-in-memory-web-api';

// import { User } from './user';


// @Injectable({
//   providedIn: 'root'
// })
// export class InMemoryDataService implements InMemoryDbService{

// 	createDb() {
// 		const users = [
// 			{ name: 'Kevn', phone: 1234, email: 'k@gmail.com' },
// 			{ name: 'Star', phone: 12, email: 'sss@gmail.com' },
// 			{ name: 'Vick', phone: 4, email: 'V@gmail.' },
// 		];
// 		console.log("create db works")
// 		return {users};
// 	  }

// 	  genId(users: User[]): number {
// 		return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11
// 	  }
// }
