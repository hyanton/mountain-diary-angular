import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { catchError, tap } from 'rxjs/internal/operators'
import { Observable, throwError } from 'rxjs'

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
        .pipe(
            //tap(data => console.log(data)),
            catchError((error: HttpErrorResponse) => {
                if (error.error instanceof ErrorEvent) {
                    // A client-side or network error occured. Handle it accordingly
                    console.error('An error occured:', error.error.message);
                } else {
                    // The backend returned an unsuccesful repsonse code.
                    // The response body max contain clues as to what went wrong
                    console.error(`Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`);
                }

                // return an observable with user-facing error message
                return throwError('Something bad happended, try again later.')
            })
        )
    }
}