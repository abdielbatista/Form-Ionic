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
    ){  }

    addNot(data: string){
      return this.http.post('http://localhost/backend/create.php',data);
  }

    getEnd(){
      return this.http.get('http://localhost/backend/getEnd.php');
  }
}
