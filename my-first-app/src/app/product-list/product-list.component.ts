import { Component, OnInit } from '@angular/core';
import { products, Product } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() {}

  Share(prod: Product) {
    window.alert(`${prod.name} 상품이 공유되었습니다!`);
  }

  ngOnInit(): void {}
}
