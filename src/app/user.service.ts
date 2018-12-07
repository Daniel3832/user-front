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

	private url = 'api/users';

	constructor(
		private http: HttpClient,
	) { }

	getUsers(): Observable<User[]>{
		return this.http.get<User[]>(this.url)
	}
	
	addUser (user: User): Observable<any> {
		return this.http.post(this.url, user, httpOptions)
	}

	updateUser (user: User): Observable<any> {
		return this.http.put(this.url, user, httpOptions)
	}
}
