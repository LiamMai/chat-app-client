import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import API_URL from '../../../shared/constants/apiUrl';
import { catchError, map, mergeMap, Observable, switchMap } from 'rxjs';
import { LOCAL_STORE_KEY } from '../../../shared/constants';
import { ApiStatusService } from '../api-status.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private apiStatusService: ApiStatusService
  ) { }

  signIn(body: BodySignInAndSignUp): Observable<AuthResponse> {
    
    return this.apiStatusService.track(
    this.http.post<AuthResponse>(API_URL.AUTH.SIGN_IN, body).pipe(
      map((res) => {
        const { accessToken, refreshToken } = res;
        localStorage.setItem(LOCAL_STORE_KEY.ACCESS_TOKEN, accessToken);
        localStorage.setItem(LOCAL_STORE_KEY.REFRESH_TOKEN, refreshToken);
        return res;
      }),
      catchError((error: ApiError) => {
        throw error;
      }) 
    ))
  }

    signUp(body: BodySignInAndSignUp): Observable<AuthResponse> {
    return this.apiStatusService.track(
    this.http.post<AuthResponse>(API_URL.AUTH.SIGN_UP, body).pipe(
      map((res) => {
        const { accessToken, refreshToken } = res;
        localStorage.setItem(LOCAL_STORE_KEY.ACCESS_TOKEN, accessToken);
        localStorage.setItem(LOCAL_STORE_KEY.REFRESH_TOKEN, refreshToken);
        return res;
      }),
      catchError((error: ApiError) => {
        throw error;
      }) 
    ))
  }

}
