import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';

import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {
  AppKendoUploadComponent
} from '../../components';
import {HttpClientModule} from '@angular/common/http';
import {UploadModule} from '@progress/kendo-angular-upload';
import {CommonModule} from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import {FormsModule} from '@angular/forms';

const APP_COMPONENTS = [AppKendoUploadComponent];

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    HttpClientModule,
    UploadModule,
    CommonModule,
    FileUploadModule,
    FormsModule
  ],
  declarations: [DashboardComponent,
    APP_COMPONENTS]
})
export class DashboardModule {
}
