import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './componentes';
import { CalculadoraService } from './services';
import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { CalculadoraRoutingComponent } from './calculadora-routing.component';

@NgModule({
  declarations: [CalculadoraComponent,
    CalculadoraRoutingComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule
  ],
  exports: [
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
