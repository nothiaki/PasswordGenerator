import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { ionCopy } from 'node_modules/@ng-icons/ionicons'
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgIconsModule.withIcons({ ionCopy }),
    ClipboardModule
  ],
  providers: [
    provideNgIconsConfig({
      size: '24px'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
