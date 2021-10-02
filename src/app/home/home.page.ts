import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  nome: any;
  cpf: any;
  data_nasc: any;
  nome_mae: any;
  tele: any;
  rua: any;
  bairro: any;
  num: any;

  constructor(
    public _apiService: ApiService
  ){}

  /*addNot(){
    console.log(this.nome,this.cpf,this.data_nasc,this.nome_mae,this.tele,this.rua,this.bairro,this.num);
  }*/

  addNot(){
      let data = {
        nome: this.nome,
        cpf: this.cpf,
        data_nasc: this.data_nasc,
        nome_mae: this.nome_mae,
        tele: this.tele,
        rua: this.rua,
        bairro: this.bairro,
        num: this.num
      }

        this._apiService.addNot(data).subscribe((res:any) => {
          console.log("ERROR ===",res);
        },(error: any) => {
          console.log("ERROR ===",error);
        })
  }
}
