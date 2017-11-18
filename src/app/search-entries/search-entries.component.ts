import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service'

@Component({
  selector: 'app-search-entries',
  templateUrl: './search-entries.component.html',
  styleUrls: ['./search-entries.component.scss']
})
export class SearchEntriesComponent implements OnInit {
  entries: Array<any>;
  constructor(private entryService: EntryService) { }
  
    async ngOnInit() {
      this.entries = await this.entryService.getEntries();
      console.log(this.entries)
    }

}
