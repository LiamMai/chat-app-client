import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ApiStatusService } from '../api-status.service';
import { HttpClient } from '@angular/common/http';
import API_URL from '../../../shared/constants/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(
    private apiStatusService: ApiStatusService,
    private http: HttpClient
  ) { }

  getPotentialFriend(): Observable<PotentialFriendItemResponse[]> {
    return this.apiStatusService.track(
      this.http.get<PotentialFriendItemResponse[]>(API_URL.FRIEND.GET_POTENTIAL).pipe(
        map((res) => {
          return res;
        }),
        catchError((error: ApiError) => {
          throw error;
        })
      ))
  }

  postSendFriendRequest(body: SendFriendRequestBody) {
    return this.apiStatusService.track(
      this.http.post(API_URL.FRIEND.POST_SEND_REQUEST, body).pipe(
        map((res) => {
          return res;
        }),
        catchError((error: ApiError) => {
          throw error;
        })
      ))
  }


}
