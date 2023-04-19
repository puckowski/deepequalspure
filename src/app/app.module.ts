import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleDeepEqualBenchmarkComponent } from './simple-deep-equal-benchmark/simple-deep-equal-benchmark.component';
import { NgxDeepEqualsPureService } from 'ngx-deep-equals-pure';
import { StandaloneTestComponent } from './standalone-test/standalone-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDeepEqualBenchmarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StandaloneTestComponent
  ],
  providers: [NgxDeepEqualsPureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
