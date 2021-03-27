import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product, Productos } from './../../models/product.model';

import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginationParameters } from '../../models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(parameters: PaginationParameters): Observable<Productos> {
    return this.http.get(`${environment.url_api}/sites/MCO/search?q=${parameters.query}&offset=${parameters.offset}&limit=${parameters.limit}`)
    .pipe(map((res: any) => res as Productos));
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.url_api}/items/${id}`);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>): Observable<any> {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
