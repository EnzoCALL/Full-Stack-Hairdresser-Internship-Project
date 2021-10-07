import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/Product";

@Injectable({
  providedIn: "root",
})
export class ProductListCrudService {
  private url = "http://localhost:3000/products";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient
  ) {}

  fetchAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, { responseType: "json" })
  }

  post(name: Partial<Product>): Observable<any> {
    return this.http.post<Partial<Product>>(this.url, name, this.httpOptions)
  }

  update(product: Product): Observable<any> {
    return this.http.put<Product>(this.url, product, this.httpOptions)
  }

  delete(id: number): Observable<any> {
    const url = `http://localhost:3000/products/${id}`;
    return this.http.delete<Product>(url, this.httpOptions)
  }
}
