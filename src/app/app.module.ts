import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { MockLocationStrategy } from '@angular/common/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './common/material.module';
import { AppComponent } from './app.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { routes } from 'app/routes';
import { ModuleShellComponent } from './module-shell/module-shell.component';
import { BackendService } from './common/backend.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

export const webComponents = [
  ModuleShellComponent,
  Page1Component,
  Page2Component,
  LikeButtonComponent,
  AppComponent,
];


@NgModule({
  declarations: [
    ...webComponents,
  ],
  entryComponents: [
    ...webComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: MockLocationStrategy
    },
    BackendService
  ],
})
export class AppModule {
  ngDoBootstrap() { }
}
