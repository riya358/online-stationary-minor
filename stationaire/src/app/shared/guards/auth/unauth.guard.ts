import {Injectable} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    Router
} from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Injectable( {
    providedIn: 'root',
} )
export class UnAuthGuard implements CanActivate {
    constructor( private authService: AuthService, private router: Router ) {}

    canActivate( route: ActivatedRouteSnapshot ) {
        if( this.authService.isAuthenticated() ) {
            this.router.navigateByUrl( '/home' );
            return false;
        }
        return true;
    };
}
