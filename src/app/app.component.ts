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
  ngOnInit(){
    setTimeout(() => {
      this.loading = false;
      this.mainapp = true ;
      this.telServise.ready()
      this.telServise.expand();
    }, 2000);
  }
}
