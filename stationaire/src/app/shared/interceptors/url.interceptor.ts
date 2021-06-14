import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let url;
        let originalUrl = request.url;

        // Check we are not calling another http url
        if (!originalUrl.startsWith('http')) {
            url = environment.baseAPIUrl;
            url += originalUrl;
        }

        const clonedRequest = request.clone({ url: url});
        return next.handle(clonedRequest);
    }
}
