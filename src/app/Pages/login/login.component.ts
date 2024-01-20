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
    console.log(this.myForm.value);
    const formData = this.myForm.value;
  
    this.http.post<any>('http://localhost:8000/login', formData).subscribe(
      (response: { authenticated: boolean }) => {
        console.log('Respuesta del servidor:', response);
        if (response.authenticated === true) {
          alert("autenticado")
          this.authService.setLoggedIn(true);
        }
      },
      (error) => {
        console.error('Error de la solicitud:', error);
      }
    );
  }
}
