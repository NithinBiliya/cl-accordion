import {
  Component,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  AfterContentInit,
  OnDestroy
} from '@angular/core';
import { AccordionGroupComponent } from '../accordion-group/accordion-group.component';
import { mapTo, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { merge, Subject } from 'rxjs';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(AccordionGroupComponent)
  groups: QueryList<AccordionGroupComponent>;

  private destroy$: Subject<void> = new Subject();

  ngAfterContentInit() {
    this.groups.changes
      .pipe(
        startWith(this.groups),
        switchMap((groups: QueryList<AccordionGroupComponent>) => {
          const clicks$ = groups.map(group =>
            group.header.click$.pipe(mapTo(group))
          );
          return merge(...clicks$);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(group => {
        group.toggle();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
