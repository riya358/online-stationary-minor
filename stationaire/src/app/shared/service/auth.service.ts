import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAPIService } from './api/auth.api';
import {ToastrService} from 'ngx-toastr';
import { ICurrentUser } from '../model/contracts/current.user.interface';
import { BehaviorSubject, Observable, of, throwError} from 'rxjs';
import { IAuthRequest } from '../model/contracts/auth-request.interface';
import { ILoginResponse, StorageTypes } from '../model/contracts/auth.interface';
import {catchError, map, mapTo, tap} from 'rxjs/operators';
import {JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwt = new JwtHelperService();

  private currentUserSubject: BehaviorSubject<ICurrentUser> = new BehaviorSubject<ICurrentUser>( null );
  currentUser$ = this.currentUserSubject.asObservable();

  public get currentUserValue(): ICurrentUser {
      return this.currentUserSubject.value;
  }

  constructor(
    private api: AuthAPIService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.initCurrentUser();
  }

  login(request: IAuthRequest): Observable<ILoginResponse> {
    return this.api.login(request).pipe(
      tap( (t) => {
        this.setCurrentUser(t);
      })
    );
  }

  isAuthenticated() {
    if (this.currentUserValue) {
      return (
        this.currentUserValue.token &&
        !this.jwt.isTokenExpired(this.currentUserValue.token)
      );
    }
    return false;
  }

  logout() {
    return of(true).pipe(
      tap(()=>{
        this.removeCurrentUser();
        this.redirectToLogin();
      })
    );
  }

  removeCurrentUser() {
    localStorage.removeItem(StorageTypes.CurrentUser);
    this.currentUserSubject.next(null);
  }
  redirectToLogin(): Promise<boolean> {
    return this.router.navigateByUrl('/auth/login');
  }

  redirectToDashboard(): Promise<boolean> {
    return this.router.navigateByUrl('/home');
  }

  initCurrentUser() {
    const currentUserJson = localStorage.getItem( StorageTypes.CurrentUser );
    if( currentUserJson ) {
        this.currentUserSubject.next( JSON.parse( currentUserJson ) );
    }
}

  private setCurrentUser(loginResponse: ILoginResponse): void {
    let currentUser: ICurrentUser = {
      token: loginResponse.token,
      user: loginResponse.user,
    };
    const decodedToken = this.jwt.decodeToken(loginResponse.token);

    localStorage.setItem(StorageTypes.CurrentUser, JSON.stringify(currentUser));
    this.currentUserSubject.next(currentUser);
  }
}
