import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, handler: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Origin', '*')

    const customReq = req.clone(
      {
        url: `${environment.domainApi}${req.url}`,
        headers
      }
    )
    return handler.handle(customReq).pipe(catchError((err: HttpErrorResponse) => { throw err.error as ApiError }));
  }
}
