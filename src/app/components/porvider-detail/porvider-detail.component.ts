import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import {Product,products } from '../../products';
import { CartService } from '../../cart.service';
import { ProviderP, ProvidersList } from '../../providerList';




@Component({
  selector: 'app-porvider-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <h1>Provider detail</h1>

    <div *ngIf="provider">
      <h2>{{provider.nombre}}</h2>

      <h3>lista de productos</h3>

      <div *ngFor=" let product of productsList ">
          <div *ngIf="product!.provider == provider.id ">
          <a [title]="product.name + ' details'" [routerLink]="['/products', product.id]">{{ product!.name }}</a>
          </div>
      </div>

    </div>
  
  
  
  `,
  styleUrl: './porvider-detail.component.css'
})
export class PorviderDetailComponent {

  provider: ProviderP | undefined;
  product: Product | undefined ;
  productsList: Product[] = products;


  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('providerId'));

    
    // Find the product that correspond with the id provided in route.
    this.provider = ProvidersList.find(prov => prov.id === productIdFromRoute);
    
  };
    


 }


