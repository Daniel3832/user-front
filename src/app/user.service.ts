import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  	providedIn: 'root'
})
export class UserService {

	// private url = 'api/users';

	private url: string = "http://localhost:3000/"
	
	constructor(
		private http: HttpClient,
	) { }

	getUsers(): Observable<User[]>{
		console.log('get user works')
		// console.log(this.http.get<User[]>('http://localhost:3000/user'))
		return this.http.get<User[]>('http://localhost:3000/user')
	}

	getUser(id: number): Observable<User>{
		return this.http.get<User>('http://localhost:3000/user/')
	}
	
	addUser (user: User): Observable<any> {
		return this.http.post<User>('http://localhost:3000/user/create', user, httpOptions)
	}

	updateUser (user: User): Observable<any> {
		return this.http.put('http://localhost:3000/user', user, httpOptions)
	}
}
