import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];
  
  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
     this.tarefas = this.tarefaService.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa "' + tarefa.Nome + '"?' )){
      this.tarefaService.remover(tarefa.Id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if(confirm('Deseja alterar o status da tarefa ' + tarefa.Nome + " ?'" )){
      debugger;
        this.tarefaService.alterarStatus(tarefa.Id);
        this.tarefas = this.listarTodos();
    }
  }
}
