import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactComponent } from './contact/contact.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product', component: ProductComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'main-nav', component: MainNavComponent},
    { path: 'header', component: HeaderComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, HeaderComponent, AboutComponent, ProductComponent, ShoppingCartComponent, ContactComponent,
     MainNavComponent];
