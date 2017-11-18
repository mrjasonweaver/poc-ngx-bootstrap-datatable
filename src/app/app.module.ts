import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SearchEntriesComponent } from './search-entries/search-entries.component';
import { EntryService } from './entry.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchEntriesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TypeaheadModule.forRoot()
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
