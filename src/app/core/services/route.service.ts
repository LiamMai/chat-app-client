import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor() { }

  getRoutePath(objRoute: Record<string, string>, route: string) {

    const keys = Object.keys(objRoute);
    const routeKey = keys.find(key => objRoute[key] === route);
    return routeKey ? `${objRoute['INDEX']}/${route}` : route;

  }
}
