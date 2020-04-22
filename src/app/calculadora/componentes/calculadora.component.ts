import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';
import { StringifyOptions, stringify } from 'querystring';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private valor1: string;
  private valor2: string;
  private operacao: string;
  private resultado: number;

  constructor(private calculadoraSerivce: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }

  limpar() : void {
    this.valor1 = '0';
    this.valor2 = null;
    this.operacao = null;
    this.resultado = 0;
  }

  adicionarNumero(numero: string) : void {
    if(this.operacao === null){
        this.valor1 = this.concatenarValor(this.valor1, numero);
    }
    else {
      this.valor2 = this.concatenarValor(this.valor2, numero);
    }
  }

    concatenarValor(valor: string, numero: string): string {
      if(valor === '0' || valor === null){
        valor = '';
      }
      else if(numero === '.' && valor === ''){
        return '0.';
      }
      else if(numero === '.' && valor.indexOf('.') > -1){
        return valor;
      }
      return valor + numero;
    }

    definirOperacao(operacao: string): string {
      if(this.operacao === null){
        this.operacao = operacao;
        return;
      }

      if(this.valor2 !== null){
          this.resultado = this.calculadoraSerivce.Calcular(parseFloat(this.valor1), 
                                                            parseFloat(this.valor2), 
                                                            this.operacao);
          this.operacao = operacao;
          this.valor1 = this.resultado.toString();
          this.valor2 = null;
          this.operacao = null;
      }
    }

    calcular(): void {
      if(this.valor2 === null){
        return;
      }

      this.resultado = this.calculadoraSerivce.Calcular(parseFloat(this.valor1), 
                                                        parseFloat(this.valor2),
                                                        this.operacao);
    }

    get display(): string {
      if(this.resultado !== null && this.resultado !== 0){
        return this.resultado.toString();
      }
      if(this.valor2 !== null){
        return this.valor2;
      }
      return this.valor1;
    }
}
