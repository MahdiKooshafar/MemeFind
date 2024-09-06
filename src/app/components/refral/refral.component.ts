import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TelegramWebappService } from '@zakarliuka/ng-telegram-webapp';
import { ReferalService } from '../../Services/TelReferal/referal.service';


@Component({
  selector: 'referal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [TelegramWebappService],
  templateUrl: './refral.component.html',
  styleUrl: './refral.component.css'
})
export class RefralComponent {

  referralCode: string = "";
  
  constructor(private referalService: ReferalService, private telService: TelegramWebappService) { }


  ngOnInit() {

    const initData = this.referalService.getInitData();

    this.telService.webApp.CloudStorage.getItem(this.referralCode, (e, value) => {

      if (e != null) {

        this.telService.webApp.CloudStorage.setItem(this.referralCode, this.referralCode, (e: string | null, bool: boolean) => {

          if (e != null) {

            console.log(e)

          } 

          else {

            console.log("okeye")

          }

        })
      } 

      else {

        console.log("its call back log", value);
        
      }
    })

    console.log(initData);

  }

  generateReferralLink() {
    this.referalService.sendReferralLink(this.referralCode);
  }
  // generateReferralLink() {
  //   const referralCode = this.telegramService.generateReferralCode();
  //   this.telegramService.sendReferralLink(referralCode);
  // }

}


