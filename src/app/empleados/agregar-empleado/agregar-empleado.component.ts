import { Component } from '@angular/core';
import {IEmpleado} from "../interfaces/iempleado";
import {EmpleadosService} from "../empleados.service";

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})
export class AgregarEmpleadoComponent {
  empleado: IEmpleado = {
    nombre: '',
    apellido: '',
    puesto: ''
  }

  constructor(private empleadoService: EmpleadosService) {
  }

  agregar() {
    if (this.empleado.nombre.trim().length === 0)
      return;

    if (this.empleado.apellido.trim().length === 0)
      return;

    if (this.empleado.puesto.trim().length === 0)
      return;

    this.empleadoService.agregarEmpleado(this.empleado);

    this.empleado = {
      nombre: '',
      apellido: '',
      puesto: ''
    };
  }
}
