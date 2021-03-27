import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { CartService } from './../../../core/services/cart.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  q ='';
  search = new FormControl('');
  total$: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }

  ngOnInit(): void {
  }

}
