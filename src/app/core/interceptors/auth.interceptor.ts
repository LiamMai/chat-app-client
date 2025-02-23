import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { LOCAL_STORE_KEY } from "../../shared/constants";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    const authToken = localStorage[LOCAL_STORE_KEY.ACCESS_TOKEN];

    if (!authToken) {
        return next(req);
    }

    const newReq = req.clone({
      headers: req.headers.append('access-token', authToken),
    });



    return next(newReq);
  }