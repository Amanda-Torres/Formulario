import { Injectable } from '@angular/core';
import { Endereco } from './../models/endereco';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  constructor() {}

  getEndereco(cep: string): Promise<Endereco> {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return new Endereco(
          data.logradouro,
          data.numero,
          data.complemento,
          data.bairro,
          data.localidade,
          data.uf,
          data.cep,
          data.ibge,
          data.gia,
          data.ddd,
          data.siafi
        );
      });
  }
}
