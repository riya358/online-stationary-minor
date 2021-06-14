import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/model/entities/user';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-authorised',
  templateUrl: './authorised.component.html',
  styleUrls: ['./authorised.component.scss']
})
export class AuthorisedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}

