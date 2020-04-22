import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';
import { JogoDaVelhaRoutingComponent } from './jogo-da-velha-routing.component';
import { JogoDaVelhaRoutingModule } from './jogo-da-velha-routing.module';

@NgModule({
  declarations: [
        JogoDaVelhaComponent,
        JogoDaVelhaRoutingComponent
      ],
  imports: [
    CommonModule,
    JogoDaVelhaRoutingModule
  ],
  exports:[
      JogoDaVelhaComponent
  ],
  providers: [
      JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
