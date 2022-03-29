import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: Product | undefined;
  // 부모 컴포넌트에게 데이터(이벤트)를 전달하고자 함
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
