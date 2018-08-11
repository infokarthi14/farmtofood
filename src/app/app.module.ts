import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// tslint:disable-next-line:import-spacing
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule }
 from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomIconService } from './services/custom-icon.services';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingEditComponent } from './shopping-cart/shopping-edit/shopping-edit.component';
import { ContactComponent } from './contact/contact.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {SlideshowModule} from 'ng-simple-slideshow';
import {AppRoutingModule, RoutingComponents} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    ShoppingEditComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MainNavComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    SlideshowModule,
    AppRoutingModule

  ],
  providers: [
    CustomIconService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
