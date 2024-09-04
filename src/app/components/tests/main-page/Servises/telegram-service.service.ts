import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelegramServiceService {
  private botToken = '7164283787:AAHzHDA4GKtCTDEb6CmKTDSYj1h5TJPweho';
  private apiUrl = `https://api.telegram.org/bot${this.botToken}`;

  constructor(private http: HttpClient) { }

  setGameScore(userId: number, score: number, messageId: number): Observable<any> {
    const url = `${this.apiUrl}/setGameScore`;
    const params = {
      user_id: userId,
      score: score,
      message_id: messageId
    };
    return this.http.post(url, params);
  }

  getGameHighScores(userId: number, messageId: number): Observable<any> {
    const url = `${this.apiUrl}/getGameHighScores`;
    const params = {
      user_id: userId,
      message_id: messageId
    };
    return this.http.get(url, { params });
  }
}

