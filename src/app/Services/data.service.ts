import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private postsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  posts$: Observable<any[]> = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getAllPost();
  }

  getAllPost() {
    this.getPosts().subscribe({
      next: (response) => {
        this.postsSubject.next(response);
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      }
    });
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8000/getPost');
  }
}
