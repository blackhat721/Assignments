import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CurrencyConverrterComponent } from './MyComponent/currency-converrter/currency-converrter.component';
import { FetchDataComponent } from './MyComponent/fetch-data/fetch-data.component';

const routes: Routes = [
  {path: 'fetchData',component:FetchDataComponent},
  {path: 'converter',component: CurrencyConverrterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
