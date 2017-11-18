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

  constructor(private entryService: EntryService) { }
  
  async ngOnInit() {
    this.entries = await this.entryService.getEntries();
    this.totalItems = this.entries.length;
    this.filteredEntries = this.entries.filter(e => e.id < 11);
    // console.log(this.filteredEntries);
  }

  pageChanged(event: any) {
    console.log(event);
    this.start = parseInt((event.page - 1) + "0");
    this.end = (event.page * 10) + 1;
    this.filteredEntries = this.entries.filter(e => e.id < this.end && e.id > this.start);
  }
}
