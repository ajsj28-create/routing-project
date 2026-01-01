import { Injectable } from '@angular/core';
import { IProduct } from '../models/products';
import { Observable, Subject, of } from 'rxjs';
import { Ires } from '../models/users';
import { productsData } from '../const/productsdata';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  triggerShowFirst$: Subject<boolean> = new Subject();

  productsArray: Array<IProduct> = productsData;

  constructor() { }

  fetchAllProducts(): Observable<Ires<Array<IProduct>>> {
    return of({
      success: true,
      data: this.productsArray,
      msg: 'All products fetched successfully!'
    })
  }

  fetchSingleProduct(id: string): Observable<Ires<IProduct>> {
    let obj = this.productsArray.find(ele => ele.id === id) as IProduct
    return of({
      success: true,
      data: obj,
      msg: `Product with id ${obj.id} fetched successfully!`
    })
  }

  addProduct(obj: IProduct): Observable<Ires<IProduct>> {
    this.productsArray.unshift(obj)
    return of({
      success: true,
      data: obj,
      msg: `Product with id ${obj.id} added successfully!`
    })
  }

  updateProduct(obj: IProduct): Observable<Ires<IProduct>> {
    let ind = this.productsArray.findIndex(ele => ele.id === obj.id)
    this.productsArray[ind].title = obj.title
    this.productsArray[ind].description = obj.description
    this.productsArray[ind].price = obj.price
    this.productsArray[ind].discount = obj.discount
    this.productsArray[ind].availability = obj.availability
    this.productsArray[ind].rating = obj.rating
    return of({
      success: true,
      data: obj,
      msg: `Product with id ${obj.id} updated successfully!`
    })
  }

  removeProduct(obj: IProduct): Observable<Ires<IProduct>> {
    let ind = this.productsArray.findIndex(ele => ele.id === obj.id)
    this.productsArray.splice(ind, 1)
    return of({
      success: true,
      data: obj,
      msg: `Product with id ${obj.id} removed successfully!`
    })
  }

}
