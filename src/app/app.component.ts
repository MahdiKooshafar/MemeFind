import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from "./components/tests/loading/loading.component";
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/tests/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent , CommonModule , NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Memefind';
  loading : boolean = true;
  mainapp : boolean = false; 
  ngOnInit(){
    setTimeout(() => {
      this.loading = false;
      this.mainapp = true ;
    }, 2000);
  }
}
