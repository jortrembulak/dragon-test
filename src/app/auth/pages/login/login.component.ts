import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public errorMessage!: string;
  public showInvalidCredentials: boolean = false;
  public submitted: boolean = false;
  public typeInput: string = 'password';
  public password: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      alert('Attention! There are some fields required.');
      return;
    }

    this.authenticationService.validateUser(this.loginForm.value).subscribe({
      next: () => {
        this.authenticationService.setUser(this.loginForm.value);
        this.router.navigate(['dragons/dragons-list']);
      },
      error: (error) => {
        this.showInvalidCredentials = true;
        this.errorMessage = error.message;
      },
    });
  }

  createForm(user?: User): void {
    this.loginForm = this.formBuilder.group({
      username: [user?.username, Validators.required],
      password: [user?.password, Validators.required],
    });
  }

  showPassword() {
    this.password = !this.password;
    this.typeInput = this.password ? 'password' : 'text';
  }
}
