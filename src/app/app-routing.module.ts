import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactComponent } from './contact/contact.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [

    { path: 'home', component: MainNavComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product', component: ProductComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'main-nav', component: MainNavComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, AboutComponent, ProductComponent, ShoppingCartComponent, ContactComponent,
     MainNavComponent];
