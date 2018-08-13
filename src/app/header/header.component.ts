import { Component, OnInit } from '@angular/core';
import { CustomIconService } from '../services/custom-icon.services';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private customIconService: CustomIconService
  ) {
    this.matIconRegistry.addSvgIcon('field', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/field.svg'));
      this.matIconRegistry.addSvgIcon('farm', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/farm.svg'));
      this.matIconRegistry.addSvgIcon('tractor', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/tractor.svg'));
      this.matIconRegistry.addSvgIcon('product', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/product.svg'));
      this.matIconRegistry.addSvgIcon('bucket', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/bucket.svg'));
      this.matIconRegistry.addSvgIcon('product', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/product.svg'));
      this.matIconRegistry.addSvgIcon('farmer', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/farmer.svg'));
    // using service to register custom icon
    this.customIconService.init();

}
}
