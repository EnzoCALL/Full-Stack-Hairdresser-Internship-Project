import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProductListCrudService } from "src/app/services/product-list-crud.service";
import { Product } from "src/app/models/Product";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productListCrudService:ProductListCrudService) {}

  ngOnInit(): void {
    this.products$ = this.fetchAll();
  }

  fetchAll(): Observable<Product[]> {
    return this.productListCrudService.fetchAll();
  }

  post(productName: Partial<Product>, productExtra: Partial<Product>,
     productPrice: Partial<Product>, productQuantity: Partial<Product>): void {
    const name = (<string>productName);
    const extra = (<string>productExtra);
    const price = (<number>productPrice);
    const quantity = (<number>productQuantity);
    if (!name) return;

    this.products$ = this.productListCrudService
      .post({ name, extra, price, quantity })
      .pipe(tap(() => (this.products$ = this.fetchAll())));
  }

  update(id: number, newName: Partial<Product>, newExtra: Partial<Product>,newPrice: Partial<Product>, newQuantity: Partial<Product>): void {
    const name = (<string>newName);
    const extra = (<string>newExtra);
    const price = (<number>newPrice);
    const quantity = (<number>newQuantity);

    if (!name) return;

    const newProduct: Product = {
      id,
      name,
      extra,
      price,
      quantity,
    };

    this.products$ = this.productListCrudService
      .update(newProduct)
      .pipe(tap(() => (this.products$ = this.fetchAll())));
  }

  delete(id: number): void {
    this.products$ = this.productListCrudService
      .delete(id)
      .pipe(tap(() => (this.products$ = this.fetchAll())));
  }
}
