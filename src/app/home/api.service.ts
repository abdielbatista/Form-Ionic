import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

  export class ApiService{
    headers: HttpHeaders;

    constructor(
      public http: HttpClient
    ){
      this.headers = new HttpHeaders();
      this.headers.append('Accept', 'aplication/json');
      this.headers.append('Content-Type', 'aplication/json');
      this.headers.append('Access-Control-Allow-Origin', '*');
    }

    addNot(data){
      return this.http.post('http://localhost:8100/backend/create.php',data);
  }
}
