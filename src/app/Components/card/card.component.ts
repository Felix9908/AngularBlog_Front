import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../Services/data.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Output() estadoCambiado = new EventEmitter<boolean>();
  @Output() idTarjetaCambiado = new EventEmitter<number>();
  @Input() posts: any;
  @Input() page: string = '';
  isMenuOpen = false;
  userId: string | null = null;
  isLogged = false

  ngOnInit(): void {
    this.authService.userId$.subscribe((userId) => {
      this.userId = (userId);
    });
    this.authService.isLoggedIn$.subscribe((isLogged) => {
      this.isLogged = (isLogged);
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor(
    private dataservice: DataService,
    private authService: AuthService
  ) {}

  deletePost(postId: number) {
    this.dataservice.deletePost(postId).subscribe(
      () => {
        console.log('Post deleted successfully');
      },
      (error) => {
        console.error('Error deleting post', error);
      }
    );
  }

  editPost(postId: number) {
    this.estadoCambiado.emit(true);
    this.idTarjetaCambiado.emit(postId);
  }
}
