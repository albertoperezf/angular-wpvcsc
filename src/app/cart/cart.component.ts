import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  clear() {
    // Clear the items in the cart
    this.cartService.clearCart();
    // Renew data from items
    this.items = this.cartService.getItems();
    window.alert('Items from the cart were deleted');
  }
}