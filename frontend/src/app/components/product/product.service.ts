import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  baseUrl: "http://localhost:3001/products" = "http://localhost:3001/products"; 

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }

  ngOnInit(): void {

  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  //Fazendo uma chamada para o backend
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }
}
