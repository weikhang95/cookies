import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
// import bulmaCarousel from '../../../node_modules/bulma-carousel/dist/js/bulma-carousel.min.js'
import { OwlOptions } from 'ngx-owl-carousel-o';
import { throwError } from 'rxjs';
import { PhotosApi } from './PhotosApi';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apiData: any;
  limit: number = 3; // <==== Edit this number to limit API results
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    mouseDrag: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
    }
  }


  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    // this.fetch();
  }

  fetch() {
    // const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${
    //   this.limit
    // }`;
    // const http$ = this.http.get<PhotosApi>(api);
    

    // http$.subscribe(res => (this.apiData = res), err => throwError(err));
    
  }


}
