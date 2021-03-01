import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = true
    if (token) {
      const requestWithAuth = request.clone({
        headers: request.headers
          .set('Authorization', 'token 77c862f6deea7a8:c5630d3fa46796a')
          .set('Accept', '*/*')
      });
      return next.handle(requestWithAuth);
    } else {
      const requestWithAuth = request.clone({
        headers: request.headers
      });
      return next.handle(requestWithAuth);
    }

  }
}

export const ApiInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiInterceptor,
  multi: true
};
