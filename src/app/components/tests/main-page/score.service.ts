import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private apiUrl = 'https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage';

  constructor(private http: HttpClient) { }

  sendScore(chatId: string, score: number): Observable<any> {
    const body = {
      chat_id: chatId,
      text: `The score is ${score}`
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
