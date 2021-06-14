import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    Router,
    CanActivateChild
} from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { of, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthRedirectGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        return of(this.authService.isAuthenticated());
    }
}
