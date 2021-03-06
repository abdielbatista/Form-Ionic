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
  nots: any = [];

  constructor(
    public _apiService: ApiService
  ){
    this.getNot();
  }

  /*addNot(){
    console.log(this.nome,this.cpf,this.data_nasc,this.nome_mae,this.tele,this.rua,this.bairro,this.num);
  }*/

  addNot(){

      //console.log(this.nome);
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

      //console.log(typeof data.nome);

        // eslint-disable-next-line no-underscore-dangle
        this._apiService.addNot(JSON.stringify(data)).subscribe((res: any) => {
          console.log('SUCCESS ===',res);
          this.nome = '';
          this.cpf = '';
          this.datanasc = '';
          this.nomemae = '';
          this.tele = '';
          this.rua = '';
          this.bairro = '';
          this.num = '';
          alert('DADOS ENVIADOS!!! AGURDE CONTATO DA NOSSA EQUIPE');
        },(error: any) => {
          alert('ERROR');
          //console.log('ERROR ===',error);
        });
  }

    getNot(){
      // eslint-disable-next-line no-underscore-dangle
      this._apiService.getNot().subscribe((res: any) => {
        console.log('SUCCESS ===',res);
        this.nots = res;
      },(error: any) => {
        //alert('ERROR');
        console.log('ERROR ===',error);
      });
    }
}
