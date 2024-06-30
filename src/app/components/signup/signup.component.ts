import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from './register';
import { BackendService } from '../../services/backend.service'



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  register = new Register();

  registrado = false;

  constructor(private backend: BackendService) {

  }
  public error: any = [];
  registrar() {
    this.registrado = true;
    console.log(this.register);
    return this.backend.signup(this.register).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }
  handleError(error: any) {
    this.error = error.error.errors;
  }
}
