import { Component } from '@angular/core';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {products} from '../../products';




@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductAlertsComponent, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

   products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

