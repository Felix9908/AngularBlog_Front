import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  private userIdSubject = new BehaviorSubject<string | null>(null);
  userId$: Observable<string | null> = this.userIdSubject.asObservable();


  setLoggedIn(value: boolean, userId: string | null): void {
    this.isLoggedInSubject.next(value);
    this.userIdSubject.next(userId);
  }
}
