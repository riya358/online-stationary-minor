import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../../model/entities/user';
import { HttpClient } from '@angular/common/http';
import { IRegisterUserRequest } from '../../model/contracts/user-request.interface';
import { IRegisterResponse } from '../../model/contracts/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class UserAPIService {

  constructor(private http: HttpClient) {}

  get(id): Observable<IUser>{
    return this.http.get<any>('users/'+ id );
  }

  register(user: IRegisterUserRequest ): Observable<IRegisterResponse> {
    return this.http.post<any>('users/register', user );
  }

  getColleges(): Observable<string[]>{
    return this.http.get<string[]>('colleges');
  }
}
