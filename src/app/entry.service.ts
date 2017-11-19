import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EntryService {

  private root = 'https://jsonplaceholder.typicode.com/posts';
  
    constructor(private http: Http) { }

    async getEntries(): Promise<Array<any>> {
      const response = await this.http.get(this.root).toPromise();
      // grab all 100 posts
      return response.json();
      // there's no pagination endpoints
      // so we'll filter them on the front end
    }

}
