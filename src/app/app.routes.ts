import { Routes } from '@angular/router';
import { MainPageComponent } from './components/tests/main-page/main-page.component';
import { RefralComponent } from './components/refral/refral.component';
import { WheelComponent } from './components/wheel/wheel.component';

export const routes: Routes = [
    {
        path:"",
        component:MainPageComponent
    },
    {
        path: "Referal",
        component:RefralComponent
    },
    {
        path: "earn",
        component: WheelComponent
    }
];
