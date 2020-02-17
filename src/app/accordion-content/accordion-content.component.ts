import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  ContentChild
} from '@angular/core';
import { AccordionContentLazyDirective } from '../accordion-content-lazy.directive';

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionContentComponent {
  @ContentChild(AccordionContentLazyDirective)
  lazyContent: AccordionContentLazyDirective;

  _isOpen = false;

  @Input()
  set isOpen(value: boolean) {
    if (this._isOpen !== value) {
      this._isOpen = value;
      this.cdr.markForCheck();
    }
  }

  get isOpen() {
    return this._isOpen;
  }

  constructor(private cdr: ChangeDetectorRef) {}
}
