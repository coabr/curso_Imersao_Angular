import { Cidade } from './cidade';

export class Pessoa {

    codigo: string;
    nome: string;
    telefone: string;
    dataNascimento: Date;
    endereco: string;
    bairro: string;
    cidade: Cidade;
    estado: string;
    ativo: boolean;
}