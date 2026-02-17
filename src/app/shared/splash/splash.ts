import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  standalone: true,
  templateUrl: './splash.html',
  styleUrl: './splash.css'
})
export class Splash implements OnInit {

  textos = [
    'Desarrollo Backend en Java',
    'Spring Boot y Spring MVC',
    'Arquitectura de APIs REST',
    'Bases de datos empresariales',
    'Contenedores y Docker',
    'Integración con Angular'
  ];

  textoMostrado = '';
  textoActualIndex = 0;
  letraIndex = 0;

  ngOnInit(): void {
    this.escribirTexto();
  }

  escribirTexto() {
    const textoActual = this.textos[this.textoActualIndex];

    if (this.letraIndex < textoActual.length) {
      this.textoMostrado += textoActual.charAt(this.letraIndex);
      this.letraIndex++;
      setTimeout(() => this.escribirTexto(), 20);
    } else {
      setTimeout(() => this.borrarTexto(), 400);
    }
  }

  borrarTexto() {
    if (this.letraIndex > 0) {
      this.textoMostrado = this.textoMostrado.slice(0, -1);
      this.letraIndex--;
      setTimeout(() => this.borrarTexto(), 30);
    } else {
      this.textoActualIndex =
        (this.textoActualIndex + 1) % this.textos.length;
      setTimeout(() => this.escribirTexto(), 300);
    }
  }
}
