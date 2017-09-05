import {
  Directive, ElementRef, HostBinding,
  HostListener, Input, OnChanges, OnInit, Renderer2,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appMyhidden]',
})
export class MyhiddenDirective implements OnInit, OnChanges {
  @Input() appMyhidden = false;
  private currentDisplay = 'block';
  private currentColor = 'red';
  @HostBinding('style.display') get displayBinding() {
    return this.currentDisplay;
  }
  @HostBinding('style.color') get colorBinding() {
    return this.currentColor;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.currentColor = 'blue';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.currentColor = 'red';
  }
  @HostListener('click') onClick() {
    alert(this.currentColor);
  }
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    console.log(this.element);
    this.toggleStyles(this.appMyhidden);
    this.onMouseEnter();
  }
  toggleStyles(checkBoolean: boolean) {
    if (checkBoolean) {
      // this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
      this.currentDisplay = 'none';
    } else {
      // this.renderer.setStyle(this.element.nativeElement, 'display', 'block');
      this.currentDisplay = 'block';
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.toggleStyles(changes['appMyhidden'].currentValue);
  }
}
