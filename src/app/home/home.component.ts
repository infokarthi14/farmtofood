import { Component, OnInit } from '@angular/core';
import * as Immutable from 'immutable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imageUrls = [
    { url: '../assets/1.jpg',
    caption: 'The first slide', href: 'home' },
    { url: '../assets/2.jpg',
     clickAction: () => alert('custom click function') },
    { url: '../assets/3.jpg',
    caption: 'Apple TV',  href: 'https://www.apple.com/' },
    '../assets/4.jpg'];
  height: string = '600px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = false;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 4444;
  stopAutoPlayOnSlide: boolean = false;
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
