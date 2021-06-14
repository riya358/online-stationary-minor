import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-msg',
  templateUrl: './validation-msg.component.html',
  styleUrls: ['./validation-msg.component.scss']
})
export class ValidationMsgComponent implements OnInit {

  @Input() field: string;
  @Input() isShow: boolean;
  @Input() type: string;
  constructor() { }

  ngOnInit(): void {
  }
}
