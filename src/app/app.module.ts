import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleDeepEqualBenchmarkComponent } from './simple-deep-equal-benchmark/simple-deep-equal-benchmark.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDeepEqualBenchmarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
