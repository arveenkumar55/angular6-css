import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';

import {TestLinkTwoComponent} from './testLinkTwo.component';

const routes: Routes = [
  {
    path: '',
    component: TestLinkTwoComponent,
    data: {
      title: 'Test link2'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestLinkTwoRoutingModule {}
