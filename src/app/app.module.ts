import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloButtonComponent } from './components/hello-button/hello-button.component';
import { DynamicModule } from 'ng-dynamic-component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DynamicSidebarComponent } from './components/dynamic-sidebar/dynamic-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicSidebarComponent,
    HelloButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicModule.forRoot(),
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
