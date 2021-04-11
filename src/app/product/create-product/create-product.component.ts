import { Component, OnInit } from '@angular/core';
import { ProductEntity } from 'src/app/models/product-entity';
import { ProductService } from 'src/app/services/product.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: ProductEntity;

  constructor(sessionService: SessionService,  productService : ProductService) {
    this.product = new ProductEntity();
  }

  ngOnInit(): void {
  }

  createProduct():void{
    
  }

}
