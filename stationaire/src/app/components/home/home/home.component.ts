import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ListResponse } from 'src/app/shared/model/contracts/response-interface';
import { ISearchRequest } from 'src/app/shared/model/contracts/search.request';
import { IItem } from 'src/app/shared/model/entities/item';
import { IUser } from 'src/app/shared/model/entities/user';
import { ItemAPIService } from 'src/app/shared/service/api/item.api';
import { UserAPIService } from 'src/app/shared/service/api/user.api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  $colleges: Observable<string[]>;
  $items: Observable<IItem[]>;
  modalRef: BsModalRef;
  user: IUser;
  form = this.fb.group({
    college: ['', Validators.compose([Validators.required])],
    search: ['', Validators.compose([Validators.required])],
  });
  constructor(
    private fb: FormBuilder,
    private userService: UserAPIService,
    private itemService: ItemAPIService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.$colleges = this.userService.getColleges();
  }

  get formControl() {
    return this.form.controls;
  }

  search() {
    console.log(this.form.value.college);
    console.log(this.form.value.search);
    if (
      !this.form.valid ||
      this.form.value.college.trim() == '' ||
      this.form.value.search.trim() == ''
    ) {
      return;
    }
    const searchReq: ISearchRequest = {
      college: this.form.value.college,
      search: this.form.value.search,
    };

    this.$items = this.itemService.search(searchReq);
  }

  open( item, template) {
    console.log(item);

    this.userService.get(item.seller)
    .subscribe((res)=>{
      this.user = res;
      this.modalRef = this.modalService.show(template);
    });
  }
}
