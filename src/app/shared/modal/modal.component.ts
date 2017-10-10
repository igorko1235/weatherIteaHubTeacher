import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AboutComponent} from '../../about/about.component';

@Component({
  selector: 'app-modal',
  template: `<ng-template #ref></ng-template>`,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('ref') ref: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    console.log(this.ref);
    console.log(AboutComponent);
    const factory = this.componentFactoryResolver.resolveComponentFactory(AboutComponent);
    // this.viewContainerRef.createEmbeddedView()
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

}
