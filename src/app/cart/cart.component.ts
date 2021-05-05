// Dependencies
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

// Services
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    telephone: ''
  });
  total = 0;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    if (this.items.length > 0) {
      let counter = 0;

      this.items.map(item => {
        counter = counter + item.price;
      });

      this.total = counter;       
    }
  }

  clear(): void {
    // Clear the items in the cart
    this.items = this.cartService.clearCart();
    // Alert the user of the clear of the cart 
    window.alert('Items from the cart were deleted');
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();

    console.warn('Your order has been submitted', this.checkoutForm.value);
    
    this.checkoutForm.reset();
  }
}