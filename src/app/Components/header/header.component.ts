import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: any
  isLogged = false
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((isLogged) => {
      this.isLogged = (isLogged);
    });
  }

  logOut(): void {
    this.authService.setLoggedIn(true, null);
    this.isLogged = false
  }
  
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}