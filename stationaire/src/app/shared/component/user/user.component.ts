import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../model/entities/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: IUser;
  constructor() { }

  ngOnInit(): void {

    
  }

  

}
