import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  @Input() label: string = '';
  @Input() for: string = '';
  @Input() public hasError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
