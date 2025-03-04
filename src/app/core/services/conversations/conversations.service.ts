import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import API_URL from '../../../shared/constants/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  constructor(
    private http: HttpClient
  ) { }

  getConversations(): Observable<ConversationPaginationResponse> {
    return this.http.get<ConversationPaginationResponse>(API_URL.CONVERSATION.GET).pipe(
      map((res) => {
        return res;
      }),
      catchError((error: ApiError) => {
        throw error;
      })
    )
  }
}
