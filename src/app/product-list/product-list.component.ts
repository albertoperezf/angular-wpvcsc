// Dependencies
import { Component } from '@angular/core';

// Services
import { CartService } from '../cart.service';

// Data
import { products } from '../products';

interface p {
  id: number,
  name: string,
  price: number,
  description: string,
  screenSize: string,
  quantity: number
};

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: p[] = products;
  className: string = 'wrapper';

  constructor(
    private cartService: CartService
  ) {}

  share(): void {
    window.alert('The product has been shared!');
  }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

  addToCart(product: {}) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/