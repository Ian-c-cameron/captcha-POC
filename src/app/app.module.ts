import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CaptchaModule } from './captcha/captcha.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
