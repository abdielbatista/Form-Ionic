import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

  export class ApiService{
    constructor(
      public http: HttpClient
    ){}

    addNot(data){
      return this.http.post('http://localhost/MeuApp/backend/create.php',data);
  }
}
