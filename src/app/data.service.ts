import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(keyword: string): Observable<any> {
    console.log(keyword);
    return this.http.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    );
  }
}
