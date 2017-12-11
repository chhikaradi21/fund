// angularjs components
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModel } from '@angular/forms';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { AppCustomPreloader } from './app-routing-loader';


const appRoutes: Routes = [
  { path: 'fund', loadChildren: './fund/fund.module#FundModule'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: AppCustomPreloader }),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
