import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
    alert("edit card " + postId )
  }
}
