import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TestPipe } from './my-component/test.pipe';
import { HighlightDirective } from './my-component/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TestPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoggerModule.forRoot({serverLoggingUrl: '/users/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
