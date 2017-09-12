import {Directive, ElementRef, HostBinding, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCountry]'
})
export class CountryDirective implements OnInit {
  currentSrc: string;
  @HostBinding() src;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.src = '100px';
    console.log(this.src);
  }
}
