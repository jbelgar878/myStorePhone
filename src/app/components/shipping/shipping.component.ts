import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  template:`
  <h3>Shipping Prices</h3>

  <div class="shipping-item" *ngFor="let shipping of shippingCosts | async">
    <span>{{ shipping.type }}</span>
    <span>{{ shipping.price | currency }}</span>
  </div>
`,
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit {

  constructor(private cartService: CartService) { }

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
    
  }

}
