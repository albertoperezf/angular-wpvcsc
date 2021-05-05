import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  storeName: string = 'AJPF Store';
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) { }

  ngOnChanges(): void {
    console.log('Change');
  }

  ngOnInit(): void {
    console.log('Items: ', this.items);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/