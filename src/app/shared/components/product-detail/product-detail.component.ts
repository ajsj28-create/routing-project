import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../models/products';
import { ProductService } from '../../services/product.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ConfirmComponent } from '../confirm/confirm.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  selectedProduct!: IProduct;
  selectedImageUrl!: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router,
    private _matDialog: MatDialog,
    private _snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getSelectedProduct()

  }

  getSelectedProduct(){
    this._activatedRoute.paramMap.subscribe(p => {
      let id = p.get('id') as string
      this._productService.fetchSingleProduct(id).subscribe(res => {
        this.selectedProduct = res.data
        this.selectedImageUrl = res.data.images[0]
      })
    })
  }

  showEditForm(obj: IProduct){
    this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: {edit: 'true'}
    })
    let config = new MatDialogConfig()
    config.disableClose = true
    config.width = '700px'
    config.data = obj
    this._matDialog.open(ProductFormComponent, config).afterClosed().subscribe(res => {
      this._router.navigate(['products', res])
    })
  }

  onProductRemove(obj: IProduct){
    let config = new MatDialogConfig()
    config.width = '400px'
    config.disableClose = true
    config.data = `Are you sure to delete product with id <strong>${obj.id}</strong>?`
    this._matDialog.open(ConfirmComponent, config).afterClosed().subscribe(res => {
      if(res){
        this._productService.removeProduct(obj).subscribe(res => {
          this._snackbarService.showAlert(res.msg, 'alert-success')
          this._productService.triggerShowFirst$.next(true)
        })
      }
    })    
  }

}
