import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public productList : any ;
  public filterCategory : any;
  searchKey:string ="";


  constructor(
    private _cartService: CartService,
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productList = this._productService.getProduct();
    this.filterCategory = cloneDeep(this.productList);
    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price});
    });
    // console.log(this.productList)
    this._cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  };


  addtocart(item: any){
    this._cartService.addtoCart(item);
  }

}
