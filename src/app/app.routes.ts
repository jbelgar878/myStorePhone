import { Routes } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { CartComponent } from "./components/cart/cart.component";
import { ShippingComponent } from "./components/shipping/shipping.component";
import { HttpClientModule } from '@angular/common/http';
import { PorviderDetailComponent } from "./components/porvider-detail/porvider-detail.component";


const routeConfig: Routes = [
    {
    path: '',
    component: ProductListComponent,
    title: 'Home page'
    },
    {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    title: 'Product details'
    },
    {
    path:'cart',
    component: CartComponent,
    title: 'Cart'
    },
    {
    path:'shipping',
    component: ShippingComponent,
    title: 'shipping'
    },
    {
        path:'providers/:providerId',
        component: PorviderDetailComponent,
        title: 'Provider Detail'
    }


];
    
    export default routeConfig;