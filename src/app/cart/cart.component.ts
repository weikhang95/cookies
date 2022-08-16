import { Component, OnInit } from '@angular/core';
import { each } from 'lodash';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public subTotal : string = '';
  public grandTotal : string = '';
  private _sessionStorageSet = false;
  constructor(private _cartService : CartService) { }

  ngOnInit(): void {    
      this._cartService.getProducts()
      .subscribe(res=>{
        if(this._sessionStorageSet == true){
          this.products = res;      
          this.subTotal = this._cartService.getTotalPrice();         
          sessionStorage.setItem('productList', JSON.stringify(res));
        } 
      })
      this.products =  JSON.parse(sessionStorage.getItem('productList') || '{}');
      this._sessionStorageSet = true;
    }
  
  removeItem(item: any){
    this._cartService.removeCartItem(item);
  }
  emptycart(){
    this._cartService.removeAllCart();
  }


}
