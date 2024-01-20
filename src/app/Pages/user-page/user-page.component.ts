import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
})
export class UserPageComponent {
  title = 'Blog de ';
  postsUserAll: any[] = [];
  userId: string | null = null;
  

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const userIdParam = this.route.snapshot.paramMap.get('user_id');
    this.userId = userIdParam !== null ? userIdParam : null;
    console.log(this.userId);
    this.getAllPost();
    console.log(this.postsUserAll)
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(
      'http://localhost:8000/getUserPostAll/' + this.userId
    );
  }

  getAllPost() {
    this.getPosts().subscribe({
      next: (response) => {
        this.postsUserAll = response;
      },
    });
  }
}
