import {NgModule} from '@angular/core';
import {TestLinkOneRoutingModule} from './testLinkOne-routing.module';
import {TestLinkOneComponent} from './testLinkOne.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [TestLinkOneRoutingModule,
    CommonModule,
    FormsModule],
  declarations: [TestLinkOneComponent]
})

export class TestLinkOneModule {
}
