import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { LoginComponent } from './Pages/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'userPage/:user_id', component: UserPageComponent },
];
