import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MoedaModel, ConversaoModel, ConversaoResponseModel } from '../models';
import { MoedaService, ConversorService } from '../services';
import { debug } from 'util';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: MoedaModel[];
  conversao: ConversaoModel;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponseModel;

  @ViewChild("conversaoForm", { static : true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService) {}

  ngOnInit() {
  	this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
  init(): void {
  	this.conversao = new ConversaoModel('EUR', 'BRL', null);
  	this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
  converter(): void {
  	if (this.conversaoForm.form.valid) {
  	  this.conversorService
        .converter(this.conversao)
        .subscribe(
          response => this.conversaoResponse = response,
          error => this.possuiErro = true
        );
  	}
  }

}
