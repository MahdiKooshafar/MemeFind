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
  refralName : string = "refralCode";
  
  constructor(private referalService: ReferalService, private telService: TelegramWebappService) { }
  
  
  generateReferralLinkString() {
    this.referralCode = this.referalService.generateReferralCode();
     
  }
  ngOnInit() {
    // const initData = this.referalService.getInitData();
    
    this.telService.webApp.CloudStorage.getItem(this.refralName, (e, value) => {
      
      if (e != null) {
        console.log(e)
      }
      
      else {
        if(value != ""){
          this.referralCode = value;
        }else{
          this.generateReferralLinkString();
          this.telService.webApp.CloudStorage.setItem(this.refralName, this.referralCode, (e: string | null, bool: boolean) => {
          
          if (e != null) {
            
            console.log(e)
            
          } 
          
          else {
            
            console.log("okeye")
            
          }
          
        })
        }
        console.log("its call back log", value);
        
      }
    })

    // console.log(initData);

  }

  generateReferralLink() {
    if(this.referralCode != ""){
      this.referalService.sendReferralLink(this.referralCode);
    }else{
      alert("kir shodi")
    }
  }

}


