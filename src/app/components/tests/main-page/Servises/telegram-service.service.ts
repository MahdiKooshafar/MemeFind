import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelegramServiceService {
  private botToken = '7164283787:AAHzHDA4GKtCTDEb6CmKTDSYj1h5TJPweho';
  private apiUrl = `https://api.telegram.org/bot${this.botToken}`;

  constructor(private http: HttpClient) { }

  setGameScore(userId: number, score: number): Observable<any> {
    const url = `${this.apiUrl}/setGameScore`;
    const params = {
      user_id: userId,
      score: score,
    };
    return this.http.post(url, params);
  }

  getGameHighScores(userId: number, score: number): Observable<any> {
    const url = `${this.apiUrl}/getGameHighScores`;
    const params = {
      user_id: userId,
      lscore: score
    };
    return this.http.get(url, { params });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error('A client-side or network error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

