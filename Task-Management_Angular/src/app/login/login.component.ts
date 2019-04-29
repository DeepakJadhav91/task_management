import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

// import { AlertService, AuthenticationService } from '../_services';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,private appComp: AppComponent) {   
    }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    get f() { return this.loginForm.controls; }

    login() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      if(this.f.username.value == 'admin' && this.f.password.value == 'admin'){
        localStorage.setItem('logged','true');
      this.appComp.isLoggedUser = true;
        // this.router.navigate(["taskDetails"]);
        this.router.navigate(['taskDetails']);
       }else {
         alert("Invalid credentials");
         this.appComp.isLoggedUser = false;
       }
  }

}
