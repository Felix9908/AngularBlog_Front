import { Component } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../Components/header/header.component';
import { CardListComponent } from '../../Components/card-list/card-list.component';
import { CommonModule } from '@angular/common';

interface Post {
  title: string;
  post: string;
}

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [
    CommonModule,
    CardListComponent,
    HeaderComponent,
    CardListComponent,
  ],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css',
})
export class PostPageComponent {
  titlePage = 'Post';
  singlePost: Post = { title: '', post: '' };
  postId = 0;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const userIdParam = this.route.snapshot.paramMap.get('id');
    if (userIdParam !== null) {
      this.postId = parseInt(userIdParam, 10);
      this.dataService.getSinglePost(this.postId).subscribe(
        (response) => {
          this.singlePost = response.post;
        },
        (error) => {
          console.error('Error fetching single post:', error);
        }
      );
    }
  }
}
