import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

	createDb() {
		const users = [
			{ name: 'Kevin', phone: 1234, email: 'k@gmail.com' },
			{ name: 'Star', phone: 12, email: 'sss@gmail.com' },
			{ name: 'Vick', phone: 4, email: 'V@gmail.com' },
		];
		return {users};
	  }
}
