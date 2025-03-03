import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface IHttpParamsBuilder {
  append(key: string, value: any): this;
  build(): HttpParams;
}

@Injectable({
  providedIn: 'root'
})
export class HttpParamsService implements IHttpParamsBuilder {
  params = new HttpParams();

  constructor(
  ) { }

  append(param: string, value: any): this {
    if (value) {
      this.params = this.params.append(param, value);
    }
    return this;
  }

  build(): HttpParams {
    return this.params;
  }

}
