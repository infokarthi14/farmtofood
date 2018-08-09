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
    this.matIconRegistry.addSvgIcon(
      'farm',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/farm.svg')
    );

    // using service to register custom icon
    this.customIconService.init();

}
}
