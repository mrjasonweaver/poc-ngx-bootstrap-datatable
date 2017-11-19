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
    this.entries = await this.entryService.getEntries();
    this.filteredEntries = this.entries.filter((e, i) => i < 10);
    this.totalItems = this.entries.length;
    console.log(this.selected);
  }

  filterEntries() {
    this.filteredEntries = this.entries.filter(e => {
      return e.title.includes(this.selected) || e.body.includes(this.selected);
    });
    this.totalItems = this.filteredEntries.length;
  }

  searchEntries(event: any) {
    event.preventDefault();
    if (this.selected !== '' || this.selected !== undefined) {
      this.filterEntries();
    } else {
      this.filteredEntries = this.entries;
    }
    this.submitted = true;
  }

  pageChanged(event: any) {
    this.start = parseInt((event.page - 1) + "0");
    this.end = event.page * 10;
    this.filteredEntries = this.entries.filter((e, i) => i > (this.start - 1) && i < this.end);
  }

  clearSearched() {
    this.selected = '';
    this.filteredEntries = this.entries.filter((e, i) => i < 10);
    this.submitted = false;
  }

  isSearched(searched) {
    if (searched === undefined || searched === '') {
      return false;
    } else {
      return true;
    }
  }

  showEntryCount(searched) {
    if (this.filteredEntries.length && searched !== undefined && searched !== '' && this.submitted === true) {
      return true;
    } else {
      return false;
    }   
  }
}
