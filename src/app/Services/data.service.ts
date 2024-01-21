import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:8000';
  private postsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  posts$: Observable<any[]> = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getAllPost();
  }

  getAllPost() {
    this.getPosts().subscribe(
      (response) => this.postsSubject.next(response),
      (error) => console.error('Error fetching posts:', error)
    );
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getPost`);
  }

  deletePost(postId: number): Observable<any> {
    const url = `${this.baseUrl}/deletePosts/${postId}`;
    return this.http.delete(url);
  }

  editPost(postId: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/posts/${postId}`, updatedData);
  }

  getSinglePost(postId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getSinglePost/${postId}`);
  }
}
