import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { LOCAL_STORE_KEY } from "../../shared/constants";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorS implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem(LOCAL_STORE_KEY.ACCESS_TOKEN);

    if (accessToken) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + accessToken) });
    }

    return next.handle(request);
  }
}
