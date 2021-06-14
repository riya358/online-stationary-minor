import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthResult } from 'src/app/shared/model/contracts/auth.interface';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required])],
  });

  loginSubscription: Subscription;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toasterService: ToastrService) {}

  ngOnInit(): void {}

  get formControl(){
    return this.form.controls;
  }

  get email(){
    return this.form.value.email;
  }

  get password(){
    return this.form.value.password;
  }

  onSubmit( $event ): void {
    $event.preventDefault();
    if ( this.form.invalid ) {
        return;
    }
    const authRequest = {
      email: this.email,
      password: this.password
    };

    this.loginSubscription = this.authService.login(authRequest)
      .subscribe( (response) => {
        if( response.result === AuthResult.Ok ){
          this.authService.redirectToDashboard();
        }
        else{
          this.toasterService.error('Email and Password not matched');
        }
      });
  }
}
