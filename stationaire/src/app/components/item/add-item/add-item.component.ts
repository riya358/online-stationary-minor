import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IAddItemRequest } from 'src/app/shared/model/contracts/add.item.request';
import { ItemAPIService } from 'src/app/shared/service/api/item.api';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.compose([Validators.required])],
    title: ['', Validators.compose([Validators.required])],
    price: [''],
    description: [''],
  });

  constructor(
    private fb: FormBuilder,
    private toasterService: ToastrService,
    private authService: AuthService,
    private itemService: ItemAPIService
  ) {}

  get formControl() {
    return this.form.controls;
  }

  get name() {
    return this.form.value.name;
  }

  get title() {
    return this.form.value.title;
  }

  get price() {
    return this.form.value.price;
  }

  get description() {
    return this.form.value.description;
  }

  ngOnInit(): void {}

  onSubmit($event): void {
    $event.preventDefault();
    if (this.form.invalid) {
      return;
    }
    const addItemReq: IAddItemRequest = {
      name: this.name,
      title: this.title,
      price: this.price,
      description: this.description,
      sellerEmail: this.authService.currentUserValue.user.email,
    };

    this.itemService.add(addItemReq).subscribe((res) => {
      this.toasterService.success('Item added successfully.');
    });
  }
}
