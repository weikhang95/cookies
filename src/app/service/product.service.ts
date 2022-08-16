import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { map as omap} from 'lodash';
import { product } from '../item/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
    products = [
        {
            id: 1,
            title: "选择A（1包海盐巧克⼒曲奇+1包杏仁巧克⼒曲奇）",
            price: 65.00.toFixed(2),
            description: "no yet write",
            category: "曲 奇",
            mainImage: "https://februaryeats.com/wp-content/uploads/2022/08/Product_Choc_2.jpg",
            // subImages: {
            //     []
            // } 
            // "rating": {
            //     "rate": 3.9,
            //     "count": 120
            // },
            quantity: 1,
            total: 165.00.toFixed(2),
            weight: "470g±10g",
            origin: "马来西亚",
            expiredDate: "標示於包裝上",
            keepMethod: "在2-7C下冷藏保存",
            keepDuration: "自商品外包裝製造日起算60天",
            flavour: "海盐巧克⼒曲奇 & 杏仁巧克⼒曲奇"
        },
        {
            id: 2,
            title: "选择B（2包海盐巧克⼒曲奇+2包杏仁巧克⼒曲奇）",
            price: 130.00.toFixed(2),
            description: "no yet write",
            category: "曲 奇",
            mainImage: "https://februaryeats.com/wp-content/uploads/2022/06/Product_4pack-scaled.jpg",
            // subImages: {
            //     []
            // } 
            // "rating": {
            //     "rate": 3.9,
            //     "count": 120
            // },
            quantity: 1,
            total: 130.00.toFixed(2),
            weight: "470g±10g",
            origin: "马来西亚",
            expiredDate: "標示於包裝上",
            keepMethod: "在2-7C下冷藏保存",
            keepDuration: "自商品外包裝製造日起算60天",
            flavour: "海盐巧克⼒曲奇 & 杏仁巧克⼒曲奇"
        },
    
    ]

  constructor(private http : HttpClient) { }

  getProduct(){
      return this.products;
    // return this.http.get<any>("https://fakestoreapi.com/products")
    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  }
}
