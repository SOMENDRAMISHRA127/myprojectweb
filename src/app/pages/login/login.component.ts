import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private routes:Router,private api:ServicesService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

onLogin() {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  const payload = this.loginForm.value;   // { email: 'admin@gmail.com', password: '123456' }

  this.api.post('/auth/login', payload).subscribe({
    next: (response) => {
      this.routes.navigateByUrl('home-page');
      console.log('Login successful:', response);
    },
    error: (err) => {
      console.error('Login failed', err);
      // Show error message to the user if needed
    }
  });

  console.log('Login Data:', payload);
}


}
