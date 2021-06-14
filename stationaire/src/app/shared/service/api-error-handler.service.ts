import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {HttpRequest} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthResult} from '../model/contracts/auth.interface';

@Injectable( {
    providedIn: 'root'
} )
export class ApiErrorHandlerService {

    private customHandlers = [ {
        endpoint: 'token/request',
        invoke: ( r, err ) => {
            if( err.error && err.error.result === AuthResult.InvalidEmailPassword )
                return 'Invalid email and password combination';
        }
    }, {
        endpoint: 'terms',
        invoke: ( r, err ) => {
            return '';
        }
    } ]

    constructor( private toastr: ToastrService ) {
    }

    handle( request: HttpRequest<any>, err: any ) {
        if( this.customHandler( request, err ) === false ) {
            return this.defaultHandler( err );
        }
    }

    customHandler( request: HttpRequest<any>, err: any ): boolean {
        const endpoint = request.url.replace( environment.baseAPIUrl, '' );
        const customHandler = this.customHandlers.find( x => x.endpoint === endpoint );
        if( customHandler ) {
            const message = customHandler.invoke( request, err );
            if( message && message.length > 0 ) {
                this.toastr.error( message );
            }
            return true;
        }
        return false;
    }

    defaultHandler( err: any ) {
        switch( err.status ) {
            case 400:
                if( err.error && Object.keys( err.error ).length > 0 ) {
                    const validationErrors = Object.keys( err.error ).map( k => err.error[ k ] );
                    this.toastr.error( validationErrors.join( ', ' ), 'Validation error!' );
                }
                break;
            case 401:
                break;
            case 403:
                if( err.hasOwnProperty( 'error' ) &&
                    err.error.hasOwnProperty( 'errors' ) &&
                    Array.isArray( err.error.errors ) ) {

                    this.toastr.error( err.error.errors.join( ', ' ), '403 Forbidden' );
                }
                break;
            case 404:
                this.toastr.error( 'The resource could not be found', '404 Not found' );
                break;

            case 500:
                this.toastr.error( 'An unknown application error has occurred', '500 Internal server error' );
                break;

            case 502:
                this.toastr.error( 'The application is currently unavailable', '502 Bad gateway' );
                break;

            case 503:
                this.toastr.error( 'The service is currently unavailable', '503 Service unavailable' );
                break;

            default:
                this.toastr.error( err.message );
                break;
        }

    }

}
