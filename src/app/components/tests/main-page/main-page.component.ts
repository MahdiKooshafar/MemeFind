import { Component, inject } from '@angular/core';
import { TelegramWebappService } from '@zakarliuka/ng-telegram-webapp';
import { TelegramServiceService } from './Servises/telegram-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormsModule],
  providers: [TelegramWebappService , TelegramServiceService],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private telServise: TelegramWebappService , private scoreServise : TelegramServiceService) { }
  Scores : string[] = ["score" ] ;
  score : any ; 
  // Unscurescore: any = this.telServise.webApp.CloudStorage.getItem(this.Scores[0] , (e , value) => {
  //   if(e){
  //     console.log(e)
  //   }else{
  //     console.log("its call back log" , value);
  //     this.score = Number(value)
      
  //   }
  // } ) ; 
  
  firstName: any;
  lastName: any;

  question1 : any ;


  

  ngOnInit() {
    this.firstName = this.telServise.initDataUnsafe.user?.first_name;
    this.lastName = this.telServise.initDataUnsafe.user?.last_name;
    this.question1 = this.telServise.initDataUnsafe.user?.id;
    this.telServise.webApp.CloudStorage.getItem(this.Scores[0] , (e , value) => {
      if(e != null){
        console.log(e)
      }else{
        console.log("its call back log" , value);
        this.score = Number(value)
        
      }
    } )
    setTimeout(() => {
      
      this.telServise.webApp.CloudStorage.setItem(this.Scores[0] , (this.score).toString() , (e : string | null , bool : boolean ) => {
        if(e != null){
          console.log(e)
        }else{
          console.log("Score is Succsessfully : " , bool)
        }
       })
    }, 1000);
  }
  seeScore(){
    
  }
  TopScore(){
    this.score = this.score + 1;
    this.telServise.webApp.CloudStorage.setItem(this.Scores[0] , (this.score).toString() , (e : string | null , bool : boolean ) => {
      if(e != null){
        console.log(e)
      }else{
        console.log("Score is Succsessfully : " , bool)
      }
     })
    // this.telServise.webApp.CloudStorage.setItem(this.Scores[0] , (this.score).toString() , (e : string | null , bool : boolean ) => {
    //   if(e != null){
    //     console.log(e)
    //   }else{
    //     console.log("Score is Succsess fully : " , bool)
    //   }
    //  })
    // this.telServise.webApp.CloudStorage.getItem(this.Scores[0] , (e , value) => {
    //   if(e){
    //     console.log(e)
    //   }else{
    //     console.log("its call back log" , value);
    //     this.score = Number(value)
    //   }
    // } )
  }
}
