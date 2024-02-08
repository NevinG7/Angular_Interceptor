import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {


  constructor(private http: HttpClient) {}

  fetchData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

  fetchFakeData(){
    return this.http.get('https://jsonplaceholder.typicod11e.com/posts/1');

  }

}
