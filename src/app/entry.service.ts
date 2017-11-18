import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EntryService {

  private root = 'https://jsonplaceholder.typicode.com/posts';
  
    constructor(private http: Http) { }
  
    async getEntries(): Promise<Array<any>> {
      const response = await this.http.get(this.root).toPromise();
      return response.json();
    }

}
