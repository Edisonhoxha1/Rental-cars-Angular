import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(public formBuilder: FormBuilder, public router: Router, public snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      localStorage.setItem('loginForm', JSON.stringify(this.loginForm.value));
    }
    if (this.loginForm.value.username == 'admin' && this.loginForm.value.email == 'admin@admin.com' && this.loginForm.value.password == '12345') {
      this.snackBar.open('Successfuly');
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['user']);
    }
  }
}
