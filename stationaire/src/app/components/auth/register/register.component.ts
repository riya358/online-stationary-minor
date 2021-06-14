import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthResult } from 'src/app/shared/model/contracts/auth.interface';
import { IRegisterUserRequest } from 'src/app/shared/model/contracts/user-request.interface';
import { UserAPIService } from 'src/app/shared/service/api/user.api';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = this.fb.group({
    title: [''],
    name:['', Validators.compose([Validators.required])],
    college:['', Validators.compose([Validators.required])],
    city:['', Validators.compose([Validators.required])],
    mobile: ['', Validators.compose([Validators.required])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required])],
    repassword: ['', Validators.compose([Validators.required])],
    isAgree: [''], 
  });

  titles = [ 'Mr', 'Ms', 'Mrs', 'Dr', 'Other' ];

  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    size: 'lg',
    class: 'modal-lg'
  };
  constructor(private fb: FormBuilder,
              private userAPIService: UserAPIService,
              private toasterService: ToastrService,
              private modalService: BsModalService,
              private authService: AuthService ) { }

  ngOnInit(): void {
    // this.form.patchValue({title: this.titles[0]});
  }

  get formControl(){
    return this.form.controls;
  }

  get title(){
    return this.form.value.title;
  }

  get name(){
    return this.form.value.name;
  }

  get college(){
    return this.form.value.college;
  }

  get city(){
    return this.form.value.city;
  }
  
  get mobile(){
    return this.form.value.mobile;
  }

  get email(){
    return this.form.value.email;
  }

  get password(){
    return this.form.value.password;
  }

  get isAgree(){
    return this.form.value.isAgree;
  }

  onSubmit( $event ): void {
    $event.preventDefault();
    if ( this.form.invalid ) {
        return;
    }
    const registerUserReq: IRegisterUserRequest = {
      title: this.title,
      name: this.name,
      college: this.college,
      city: this.city,
      mobile: this.mobile,
      email : this.email,
      password: this.password,
      isAgree: this.isAgree
    };

    this.userAPIService.register(registerUserReq)
      .subscribe(
        (res) => {
          if ( res.result === AuthResult.Ok ) {
            this.form.reset();
            this.authService.initCurrentUser();
            this.authService.redirectToDashboard();
          }
          else
          {
            this.toasterService.error('Please enter correct details and try again');
          }
        }
      );
  }
}
