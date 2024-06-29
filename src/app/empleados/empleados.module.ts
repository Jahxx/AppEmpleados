import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import {FormsModule} from "@angular/forms";
import {EmpleadosService} from "./empleados.service";



@NgModule({
  declarations: [
    AgregarEmpleadoComponent,
    ListadoEmpleadosComponent,
    PaginaInicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PaginaInicioComponent,
    ListadoEmpleadosComponent
  ],
  providers: [
    EmpleadosService
  ]
})
export class EmpleadosModule { }
