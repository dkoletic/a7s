import { Injectable, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
//import { Observable, BehaviorSubject, empty  } from 'rxjs';
/*
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';
*/
//import { catch, switchMap, take, finally, throw } from 'rxjs/operators';
/*
import { LoginService, TokenResponse } from '../services/login.service';

@Injectable()
export class TokenInterceptor {
    private auth: LoginService;
    private url: string;

    isRefreshingToken: boolean;

    tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private inj: Injector
    ) {
        setTimeout(() => { // <-- TODO: hack
            this.auth = inj.get(LoginService);
            this.route.url.subscribe(input => {
                this.url = input.join('/');
            });
        });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.has('X-Token')) {
            return next.handle(req)
                .catch((err: any, caught: Observable<HttpEvent<any>>) => {
                    if (err instanceof HttpErrorResponse) {
                        switch (err.status) {
                            case 401:
                                return this.handle401Error(req, next);
                            case 500:
                                this.router.navigate(['/internal-server-error']);
                                break;
                        }
                    }

                    return Observable.throw(err);
                });
        }

        return next.handle(req);
    }

    addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
        return req.clone({setHeaders: {'X-Token': token}});
    }

    handle401Error(req: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshingToken) {
            this.isRefreshingToken = true;

            // Reset here so that the following requests wait until the token
            // comes back from the refreshToken call.
            this.tokenSubject.next(null);

            return this.auth.refresh()
                .switchMap((response: TokenResponse) => {
                    this.auth.token = response.token_key;
                    this.auth.refreshToken = response.refresh_token;
                    this.auth.user = response.user;

                    if (response.token_key) {
                        this.tokenSubject.next(response.token_key);
                        return next.handle(this.addToken(req, response.token_key));
                    }

                    // If we don't get a new token, we are in trouble so logout.

                    if (!this.router.url.startsWith('/login')) {
                        this.router.navigateByUrl('/login');
                        return empty();
                    }

                    return this.auth.logout();
                })
                .catch(error => {

                    this.auth.logout();

                    if (!this.router.url.startsWith('/login')) {
                        this.router.navigateByUrl('/login');
                        return Observable.empty();
                    }

                    return Observable.empty();
                })
                .finally(() => {
                    this.isRefreshingToken = false;
                });
        } else {
            return this.tokenSubject
                .filter(token => token != null)
                .take(1)
                .switchMap(token => {
                    return next.handle(this.addToken(req, token));
                });
        }
    }

}*/
