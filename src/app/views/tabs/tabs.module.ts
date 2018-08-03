import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';

import {TabsComponent} from './tabs.component';
import {TabsRoutingModule} from './tabs-routing.module';
import {
  AppTabComponent
} from '../../components';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

const APP_COMPONENTS = [AppTabComponent];

@NgModule({
  imports: [
    TabsRoutingModule,
    ChartsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [TabsComponent,
    APP_COMPONENTS]
})
export class TabsModule {
}
