import { Component } from '@angular/core';
import { TelegramWebappService } from '@zakarliuka/ng-telegram-webapp';
import { TelegramServiceService } from './Servises/telegram-service.service';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  providers: [TelegramWebappService , TelegramServiceService],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private telServise: TelegramWebappService , private scoreServise : TelegramServiceService) { }

  firstName: any;
  lastName: any;

  Scores : number = 0 ;


  ngOnInit() {
    this.firstName = this.telServise.initDataUnsafe.user?.first_name;
    this.lastName = this.telServise.initDataUnsafe.user?.last_name;
    try{

    }
    catch{

    }

    // this.WhatsIs = this.firstName.toString() + this.lastName.toString();
  }


  updateScore(userId: number, score: number, messageId: number) {
    this.scoreServise.setGameScore(userId, score, messageId).subscribe(response => {
      console.log('Score updated:', response);
    });
  }

  getHighScores(userId: number, messageId: number) {
    this.scoreServise.getGameHighScores(userId, messageId).subscribe(highScores => {
      console.log('High scores:', highScores);
    });
  }

  // shareScore() {
  //   TelegramGameProxy.shareScore();
  // }
  
}
