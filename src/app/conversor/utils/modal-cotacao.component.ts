import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ConversaoResponseModel, ConversaoModel } from '../models/';
import { ConversorService } from '../services';

@Component({
  selector: ' modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

	@Input() id: string;
	@Input() conversaoResponse: ConversaoResponseModel;
	@Input() conversao: ConversaoModel = new ConversaoModel();
	@Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

	constructor(private conversorService: ConversorService) {}

	ngOnInit() {
  	}

	novaConsulta() {
		this.onConfirm.emit();
	}

	get valorConvertido(): string {
	  	if (this.conversaoResponse === undefined) {
	  		return '0';
	  	}
	  	
	  	return (this.conversao.valor * 
	  		this.conversaoResponse.rates[this.conversao.moedaPara])
	  			.toFixed(2);
	}

	get cotacaoPara(): number {
	  	return this.conversorService.cotacaoPara(
	  		this.conversaoResponse, this.conversao);
	}

	get cotacaoDe(): string {
	  	return this.conversorService.cotacaoDe(
	  		this.conversaoResponse, this.conversao);
	}

	get dataCotacao(): string {
		return this.conversorService.dataCotacao(
	  		this.conversaoResponse);
  }
  
}
