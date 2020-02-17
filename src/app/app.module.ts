import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionHeaderComponent } from './accordion-header/accordion-header.component';
import { AccordionContentComponent } from './accordion-content/accordion-content.component';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionContentLazyDirective } from './accordion-content-lazy.directive';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionHeaderComponent,
    AccordionContentComponent,
    AccordionGroupComponent,
    AccordionComponent,
    AccordionContentLazyDirective,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
