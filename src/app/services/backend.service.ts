import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../components/signup/register';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  signup(data: Register) {
    return this.http.post('http://laravel_jwt.test/api/auth/register', data);
  }
}
