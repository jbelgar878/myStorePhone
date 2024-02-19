import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {products, Product} from '../../products';
import { CartService } from '../../cart.service';
import { ProviderP, ProvidersList } from '../../providerList';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit {

  product: Product | undefined ;
  provider: ProviderP | undefined;


  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    
  
    // Find the product that correspond with the id provided in route.
     this.product = products.find(product => product.id === productIdFromRoute);
     this.provider = ProvidersList.find(prov => prov.id === this.product?.provider);

     
  }
}
