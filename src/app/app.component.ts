import { Component } from '@angular/core';
import { env } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  nombreEstudiante = 'Freddy Calahorrano';
  edadEstudiante = 28;

  horaActual: Date;

  colors: Icolor[] = [
    {redSocial: 'Whatsapp', color: '#25D366'},
  ];

  logAcumulador: string[] = [];

  insertLogAcumulador(log: string){
    console.log(log);
    this.logAcumulador.push(log);
  }

  mostrarHora(evento: any){
    console.log(evento)
    this.horaActual = new Date();
    const {target} = evento;
    target.innerHtml = `Cambio Hora - ${this.horaActual.getSeconds()}`

    this.horaActual = new Date()
  }
}

interface Icolor {
  
}