import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/model/entities/user';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  currentUser: IUser;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserValue.user;
  }
  
  logout(): void {
    this.authService.logout().subscribe();
  }
}
