import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardListComponent } from '../../Components/card-list/card-list.component';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterModule, CardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = "Blog"

  posts: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.posts$.subscribe(posts => {
      this.posts = posts;
    });
  }

}
