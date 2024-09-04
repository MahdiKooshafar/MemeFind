import { Component, inject } from '@angular/core';
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

  question1 : any ;


  ngOnInit() {
    this.firstName = this.telServise.initDataUnsafe.user?.first_name;
    this.lastName = this.telServise.initDataUnsafe.user?.last_name;
    this.question1 = this.telServise.initDataUnsafe.user?.id;
    console.log(this.question1)
    // this.telServise.cloudStorage.getItem()
    try{
      
    }
    catch{
      
    }
    
    // this.WhatsIs = this.firstName.toString() + this.lastName.toString();
  }
  setScore(){
    this.telServise.cloudStorage.setItem(this.question1.toString() , this.Scores.toString())

  }

  updateScore(userId: number, score: number) {
    this.scoreServise.setGameScore(userId, score).subscribe(response => {
      console.log('Score updated:', response);
    });
  }

  getHighScores(userId: number, lscore: number) {
    this.scoreServise.getGameHighScores(userId, lscore).subscribe(highScores => {
      console.log('High scores:', highScores);
    });
  }

  // shareScore() {
  //   TelegramGameProxy.shareScore();
  // }
  
}
