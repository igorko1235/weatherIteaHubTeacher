import {Directive, EventEmitter, Input, Output, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {
  @Output('delay') delayTriggered: EventEmitter<number> = new EventEmitter();
  @Input() set appDelay(time: number) {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.delayTriggered.emit(time);
    }, time);
  }
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }
}
