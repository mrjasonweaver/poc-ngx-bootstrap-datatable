import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
