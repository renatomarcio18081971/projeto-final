import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }


  /**
   * Méodo para cálculo dos valores
   * @param valor1 primeiro valor
   * @param valor2 segundo valor
   * @param operacao faz o case para saber qual é o cálculo a ser realizado !
   */
  Calcular(valor1: number, valor2: number, operacao: string): number {
    let resultado: number;

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = valor1 + valor2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = valor1 - valor2;
        break;
      case CalculadoraService.DIVISAO:
        if (valor2 == 0){
          valor2 = 1;
        }
        resultado = valor1 / valor2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = valor1 * valor2;
        break;
    }

    return resultado;
  }

}
