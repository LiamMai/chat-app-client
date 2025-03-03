import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import API_URL from '../../../shared/constants/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(
    private http: HttpClient
  ) { }

  getPotentialFriend(): Observable<PotentialFriendItemResponse[]> {
    return this.http.get<PotentialFriendItemResponse[]>(API_URL.FRIEND.GET_POTENTIAL).pipe(
      map((res) => {
        return res;
      }),
      catchError((error: ApiError) => {
        throw error;
      })
    )
  }

  postSendFriendRequest(body: SendFriendRequestBody) {
    return this.http.post(API_URL.FRIEND.POST_SEND_REQUEST, body).pipe(
      map((res) => {
        return res;
      }),
      catchError((error: ApiError) => {
        throw error;
      })
    )
  }

  geSendFriendRequest(params?: HttpParams): Observable<SendFriendRequestResponse> {
    return this.http.get<SendFriendRequestResponse>(API_URL.FRIEND.GET_SEND_FRIEND_REQUEST, { params }).pipe(
      map((res) => {
        return res;
      }),
      catchError((error: ApiError) => {
        throw error;
      })
    )
  }

  getReceiveFriendRequest(params?: HttpParams): Observable<SendFriendRequestResponse> {
    return this.http.get<SendFriendRequestResponse>(API_URL.FRIEND.GET_RECEIVE_FRIEND_REQUEST, { params }).pipe(
      map((res) => {
        return res;
      }),
      catchError((error: ApiError) => {
        throw error;
      })
    )
  }

  patchAcceptFriendRequest(body: ActionFriendRequest) {
    return this.http.patch(API_URL.FRIEND.PATCH_FRIEND_REQUEST_ACCEPT, body).pipe(
      map((res) => {
        return res;
      }),
      catchError((error: ApiError) => {
        throw error;
      })
    )
  }


  patchDenyFriendRequest(body: ActionFriendRequest) {
    return this.http.patch(API_URL.FRIEND.PATCH_FRIEND_REQUEST_DENY, body).pipe(
      map((res) => {
        return res;
      }),
      catchError((error: ApiError) => {
        throw error;
      })
    )
  }
}
