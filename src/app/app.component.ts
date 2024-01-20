import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './Services/data.service';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, HttpClientModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  providers:[DataService, AuthService],
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_BlogFront';
}
