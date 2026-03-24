import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UsersAPIResponse } from './userDataType';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/users';

  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  saveUser(data: User) {
    return this.http.post<User>(this.url, data);
  }

  deleteUser(id: number | undefined) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getUser(id: string | undefined | null) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateUser(data: User, id: string | null) {
    return this.http.put<User>(`${this.url}/${id}`, data);
  }
}
