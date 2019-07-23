import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {

  f: FormGroup;
  inProgress: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.f = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  get username() {
    return this.f.get('username');
  }
  get password() {
    return this.f.get('password');
  }
  get loginText(): string {
    return this.inProgress ? "Logging in..." : "Login";
  }
  signin() {
    this.inProgress = true;
    this.api.loginUser(this.f.value).subscribe(response => {
      if(response.loggedIn) {
        localStorage.setItem('authToken', response.token);
        let prevUrl = this.api.prevUrl;
        (prevUrl === "") ? prevUrl = "/home" : prevUrl;
        this.router.navigate([prevUrl])
      } else {
        // (response.error === "EMAIL_NOT_VERIFIED") ? this.emailVerification = true : false
      }
      this.inProgress = false;
    }, error => {
      this.inProgress = false;
    });
  }

}
