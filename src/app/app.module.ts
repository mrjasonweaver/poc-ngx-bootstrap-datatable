import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


import { AppComponent } from './app.component';
import { SearchEntriesComponent } from './search-entries/search-entries.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchEntriesComponent
  ],
  imports: [
    BrowserModule,
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
