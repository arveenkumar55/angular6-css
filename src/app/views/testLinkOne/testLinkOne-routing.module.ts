import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';

import {TestLinkOneComponent} from './testLinkOne.component';

const routes: Routes = [
  {
    path: '',
    component: TestLinkOneComponent,
    data: {
      title: 'Test link1'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestLinkOneRoutingModule {}
