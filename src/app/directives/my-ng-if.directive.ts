import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective {
  @Input() set appMyNgIf(shouldAdd: boolean) {
    if (shouldAdd) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }
}
