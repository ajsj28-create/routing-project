import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.scss']
})
export class ProductDashComponent implements OnInit {

  productsArray: Array<IProduct> = [];

  selectedId!: string;

  owlConfig = {
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: [
      '<span class="nav-arrow left">&#10094;</span>',
      '<span class="nav-arrow right">&#10095;</span>'
    ],
    autoplay: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 6
      }
    }
  }

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.showFirstProduct()
    this._productService.triggerShowFirst$.subscribe(res => {
      if(res){
        this.showFirstProduct()
      }
    })
  }

  showFirstProduct(){
    this._router.navigate(['products', this.productsArray[0].id])
    this.selectedId = this.productsArray[0].id
  }

  getAllProducts(){
    this._productService.fetchAllProducts().subscribe(res => {
      this.productsArray = res.data
    })
  }

  onProductSelect(obj: IProduct){
    this._router.navigate(['products', obj.id])
    this.selectedId = obj.id
  }

  showAddForm(){
    this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: {edit: 'false'}
    })
    let config = new MatDialogConfig()
    config.disableClose = true
    config.width = '700px'
    this._matDialog.open(ProductFormComponent, config).afterClosed().subscribe(res => {
      this._router.navigate(['products', res])
      this._productService.triggerShowFirst$.next(true)
    })
  }

}
