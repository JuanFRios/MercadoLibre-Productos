import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { mergeMap } from 'rxjs/operators';

import { Product } from './../../../core/models/product.model';
import { PaginationParameters } from './../../../core/models/pagination.model';
import { ProductsService } from './../../../core/services/products/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  paginationParameters: PaginationParameters;
  pageNumber: number;
  totalItemsAvailable: number;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.paginationParameters = new PaginationParameters();
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const search = params.search;
      this.search(search);
    });
  }

  clickProduct(id: number) {
  }

  fetchProducts(offset: number) {
    this.paginationParameters.offset = offset;
    this.paginationParameters.limit = 30;
    this.productsService.getProducts(this.paginationParameters)
    .subscribe(products => {
      this.totalItemsAvailable = products.paging.total;
      products.results.forEach(product => {
        this.productsService.getProduct(product.id).subscribe(producto => {
          this.products.push(producto);
        });
      });
    });
  }

  search(search: string){
    this.products = [];
    this.paginationParameters.query = search;
    this.fetchProducts(0);
  }


  onPaginateChange(event: any){
    this.products = [];
    this.pageNumber = event.pageIndex;
    this.fetchProducts(this.pageNumber * 30);
  }

}
