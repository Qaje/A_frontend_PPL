import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../login/login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = new Login();

  ingresado = false;
  ingreso() {
    this.ingresado = true;
  }
}
