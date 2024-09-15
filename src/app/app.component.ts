import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from "./components/tests/loading/loading.component";
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/tests/nav/nav.component';
import { TelegramWebappService } from '@zakarliuka/ng-telegram-webapp';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent, CommonModule, NavComponent],
  providers:[TelegramWebappService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private telServise: TelegramWebappService){}
  title = 'Memefind';
  loading : boolean = true;
  mainapp : boolean = false; 
  refferer : string = "";
  ngOnInit(){
    setTimeout(() => {
      this.loading = false;
      this.mainapp = true ;
      this.telServise.ready()
      this.telServise.expand();
    }, 2000);
    // const referrerIndex = window.location.href;
    // const params = new URLSearchParams(new URL(referrerIndex).search);
    // const referrerValue = params.get('startapp');
    // const referrerId = referrerValue?.slice(11)
    // console.log('referrer ID:', referrerId);

    // window.location.href.slice(referrerIndex + 8 ,  )
  }
}
