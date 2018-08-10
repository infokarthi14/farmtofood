import { Component, OnInit } from '@angular/core';
import * as Immutable from 'immutable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imageUrls = [
    { url: 'https://cdn.pixabay.com/photo/2013/11/01/19/14/rice-fields-204128_960_720.jpg',
    caption: 'The first slide', href: '#config' },
    { url: 'https://cdn.pixabay.com/photo/2014/05/14/06/09/plantation-343915_960_720.jpg',
     clickAction: () => alert('custom click function') },
    { url: 'https://c1.staticflickr.com/9/8107/8553791518_4f6ca16b3d_b.jpg',
    caption: 'Apple TV', href: 'https://www.apple.com/' },
    'https://s-i.huffpost.com/gen/2016778/images/o-BROWN-SUGAR-facebook.jpg'];
  height: string = '650px';
  width: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = true;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = true;
  width: string = '100%';
}
