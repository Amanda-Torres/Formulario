export class Endereco {
  logradouro: string = '';
  numero: number = 0;
  complemento: string = '';
  bairro: string = '';
  cidade: string = '';
  uf: string = '';
  cep: string = '';
  ibge: string = '';
  gia: string = '';
  ddd: string = '';
  siafi: string = '';

  constructor(
    logradouro: string,
    numero: number,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    cep: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
  ) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
    this.cep = cep;
    this.ibge = ibge;
    this.gia = gia;
    this.ddd = ddd;
    this.siafi = siafi;
  }
}
