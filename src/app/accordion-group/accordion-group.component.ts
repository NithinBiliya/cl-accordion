import {
  Component,
  ChangeDetectionStrategy,
  ContentChild
} from '@angular/core';
import { AccordionHeaderComponent } from '../accordion-header/accordion-header.component';
import { AccordionContentComponent } from '../accordion-content/accordion-content.component';

@Component({
  selector: 'app-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionGroupComponent {
  @ContentChild(AccordionHeaderComponent)
  header: AccordionHeaderComponent;

  @ContentChild(AccordionContentComponent)
  content: AccordionContentComponent;

  toggle() {
    this.header.isOpen = !this.header.isOpen;
    this.content.isOpen = !this.content.isOpen;
  }
}
