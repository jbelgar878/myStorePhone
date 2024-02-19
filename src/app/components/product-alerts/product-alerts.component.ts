import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [ProductListComponent, CommonModule, RouterOutlet ],
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {
  @Input() product: { name: string; price: number; description: string; } | undefined;
  @Output() notify = new EventEmitter();
}
