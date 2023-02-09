import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConverrterComponent } from './MyComponent/currency-converrter/currency-converrter.component';
import { FetchDataComponent } from './MyComponent/fetch-data/fetch-data.component';
import { ApicallsService } from './services/apicalls.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverrterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApicallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
