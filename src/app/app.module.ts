import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { PaginationModule } from 'ngx-bootstrap/pagination';
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
    FormsModule,
    HttpModule,
    PaginationModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
