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
  datanasc: any;
  nomemae: any;
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

      const data = {
        nome: this.nome,
        cpf: this.cpf,
        datanasc: this.datanasc,
        nomemae: this.nomemae,
        tele: this.tele,
        rua: this.rua,
        bairro: this.bairro,
        num: this.num,
      };

        // eslint-disable-next-line no-underscore-dangle
        this._apiService.addNot(data).subscribe((res: any) => {
          console.log('SUCCESS ===',res);
        },(error: any) => {
          console.log('ERROR ===',error);
        });
  }
}
