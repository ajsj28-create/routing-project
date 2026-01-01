import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';
import { UuidService } from '../../services/uuid.service';
import { ProductService } from '../../services/product.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProduct } from '../../models/products';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @ViewChild('productForm') productForm!: NgForm;
  isEditMode: boolean = false;
  imgArray: string[] = [];
  patchData!: IProduct;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _snackbarService: SnackbarService,
    private _uuidService: UuidService,
    private _productService: ProductService,
    private _matDialogRef: MatDialogRef<ProductFormComponent>,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) data: IProduct
  ) { 
    this.patchData = data
  }

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe(p => {
      let flag = p.get('edit') as string
      if(flag === 'true'){
        this.isEditMode = true
        setTimeout(() => {
          this.productForm.form.patchValue(this.patchData)
        })
      }else{
        this.isEditMode = false
      }
      console.log(this.isEditMode)
    })
  }

  onProductAdd(){
    if(this.productForm.valid){
      let obj = {...this.productForm.value, id: this._uuidService.uuid(), images: this.imgArray}
      this._productService.addProduct(obj).subscribe(res => {
        this._matDialogRef.close(obj.id)
        this._snackbarService.showAlert(res.msg, 'alert-success')
      })
    }else{
      this._snackbarService.showAlert('Fill all the required fields correctly!', 'alert-warning')
    }
  }

  onAddUrl(control: HTMLInputElement){
    if(control.value){
      this.imgArray.push(control.value)
      control.value = ''
    }else{
      this._snackbarService.showAlert('Image url cannot be empty!', 'alert-warning')
    }
  }

  onClose(){
    this._matDialogRef.close()
    this._router.navigate([], {
      queryParams: {},
      replaceUrl: true
    });
  }

  onProductUpdate(){
    if(this.productForm.valid){
      let obj = {...this.productForm.value, id: this.patchData.id}
      this._productService.updateProduct(obj).subscribe(res => {
        this._matDialogRef.close()
        this._router.navigate([], {
          queryParams: {},
          replaceUrl: true
        });
        this._snackbarService.showAlert(res.msg, 'alert-success')
      })
    }else{
      this._snackbarService.showAlert('Fill all the required fields correctly!', 'alert-warning')
    }
  }
}
