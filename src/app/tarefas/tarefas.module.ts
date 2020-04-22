import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';
import { TarefasRoutingComponent } from './tarefas-routing.component';
import { TarefasRoutingModule } from './tarefas-routing.module';;

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective,
    TarefasRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TarefasRoutingModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
