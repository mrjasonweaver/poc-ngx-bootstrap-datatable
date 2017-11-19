import { Component, Input } from '@angular/core';
import { EntryService } from '../entry.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-search-entries',
  templateUrl: './search-entries.component.html',
  styleUrls: ['./search-entries.component.scss']
})

export class SearchEntriesComponent implements OnInit {
  selected: string;
  entries: any[];
  filteredEntries: any[] = [];
  totalItems: number;
  currentPage: number = 1;
  start: any;
  end: number;
  submitted: boolean = false;

  constructor(private entryService: EntryService) { }

  async ngOnInit() {

    // store the entire payload so we can filter it
    this.entries = await this.entryService.getEntries();

    // set everything up with pagination
    // 10 posts per page
    this.filteredEntries = this.entries.filter((e, i) => i < 10);
    this.totalItems = this.entries.length;
  }

  // searching on form submit
  searchEntries(event: any) {
    event.preventDefault();

    // flag for frontend conditionals
    this.submitted = true;

    // return first 10 entires if input is reset
    if (this.selected === '' || this.selected === undefined) {
      return this.filteredEntries = this.entries.filter((e, i) => i < 10);
    
    // return entires filtered based on string submitted
    } else {
      this.filteredEntries = this.entries.filter(e => {
        return e.title.includes(this.selected) || e.body.includes(this.selected);
      });
    }
  }

  // handle pagination
  pageChanged(event: any) {

    // do some math based on user input
    this.start = parseInt((event.page - 1) + "0");
    this.end = event.page * 10;

    // return filtered entries based on page clicked
    this.filteredEntries = this.entries.filter((e, i) => i > (this.start - 1) && i < this.end);
  }

  // clear out the searched strings and reset the page
  clearSearched() {
    this.selected = '';
    this.filteredEntries = this.entries.filter((e, i) => i < 10);
    this.submitted = false;
  }

  // shows and hides the pagination and selected search term
  isSearched(searched) {
    if (searched === undefined || searched === '') {
      return false;
    } else {
      return true;
    }
  }

  // shows and hides the number of entries found
  showEntryCount(searched) {
    if (this.filteredEntries.length && searched !== undefined && searched !== '' && this.submitted === true) {
      return true;
    } else {
      return false;
    }   
  }
}
