import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterComponent } from './filter/filter.component';
import { CommonIntentsComponent } from './dashboard/common-intents/common-intents.component';
import { ActiveHoursComponent } from './dashboard/active-hours/active-hours.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataComponent } from './dashboard/data/data.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { DetailChartComponent } from './detail-chart/detail-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterComponent,
    CommonIntentsComponent,
    ActiveHoursComponent,
    DashboardComponent,
    DataComponent,
    DetailPageComponent,
    DetailChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        NgbModule,
        NgbPaginationModule,
         NgbAlertModule,
         FontAwesomeModule,         

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
