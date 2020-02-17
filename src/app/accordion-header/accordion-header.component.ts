import {
  Component,
  ChangeDetectorRef,
  ElementRef,
  Input,
  HostBinding,
  ChangeDetectionStrategy
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'accordionHeader'
})
export class AccordionHeaderComponent {
  click$ = fromEvent(this.host.nativeElement, 'click');
  _isOpen = false;

  constructor(private host: ElementRef, private cdr: ChangeDetectorRef) {}

  @Input()
  @HostBinding('class.accordion-open')
  set isOpen(value: boolean) {
    if (this.isOpen !== value) {
      this._isOpen = value;
      this.cdr.markForCheck();
    }
  }

  get isOpen() {
    return this._isOpen;
  }
}
