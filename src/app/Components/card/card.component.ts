import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../Services/data.service';

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
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor(private dataservice: DataService){}

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
