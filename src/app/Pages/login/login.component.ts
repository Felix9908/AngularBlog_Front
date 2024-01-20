import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      name: [],
      password: [],
    });
  }

    

  public submitForm() {
    const formData = this.myForm.value; 
    this.http.post<any>('http://localhost:8000/login', formData).subscribe(
      (response: { authenticated: boolean, id: string }) => {
        console.log('Respuesta del servidor:', response);
        if (response.authenticated === true) {
          console.log(response.id)
          alert("autenticado")
          this.authService.setLoggedIn(true, response.id );
        }
      },
      (error) => {
        console.error('Error de la solicitud:', error);
      }
    );
  }
}
