import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../Services/data.service';
import { CardListComponent } from '../../Components/card-list/card-list.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [HeaderComponent, CommonModule, CardListComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
})
export class UserPageComponent {
  public myForm!: FormGroup;
  postsUserAll: any[] = [];
  userId: string | null = null;
  title = '';
  showCreateForm = false;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private http: HttpClient,
    private fb: FormBuilder,
  ) {
    this.myForm = this.createMyForm();
  }

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      title: [''],
      post: [''],
      user_id: this.userId
    });
  }

  onSubmit() {
    const formData = this.myForm.value; 
    this.http.post<any>('http://localhost:8000/CreatePost', formData).subscribe(
      (response: { authenticated: boolean, id: string }) => {
        console.log('Respuesta del servidor:', response);
        if (response.authenticated === true) {
          console.log(response.id)
          alert("datos enviados")
        }
      },
      (error) => {
        console.error('Error de la solicitud:', error);
      }
    );
    this.showCreateForm = false;
  }

  ngOnInit() {
    const userIdParam = this.route.snapshot.paramMap.get('user_id');
    this.userId = userIdParam !== null ? userIdParam : null;
    const numId: number = parseInt(this.userId!, 10);
    this.dataService.posts$.subscribe((posts) => {
      this.postsUserAll = posts.filter((post) => {
        return post.user_id == numId;
      });
    });
    if (this.postsUserAll.length > 0) {
      this.title = this.postsUserAll[0].name + "'s blog";
    }
    this.myForm = this.createMyForm();
  }
}
