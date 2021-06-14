import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAuthRequest } from '../../model/contracts/auth-request.interface';
import { AuthResult, ILoginResponse } from '../../model/contracts/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIService {

  constructor(private httpClient: HttpClient) {
  }

  login(request: IAuthRequest): Observable<ILoginResponse> {
      return this.httpClient.post<ILoginResponse>('auth/login', request );
  }
}
