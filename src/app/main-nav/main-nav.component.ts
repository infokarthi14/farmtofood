import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomIconService } from '../services/custom-icon.services';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private customIconService: CustomIconService) {
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
