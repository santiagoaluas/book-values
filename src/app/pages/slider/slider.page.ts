import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {

  sliders: {title: string, description: string, imageUrl: string} []=[
    {title: "BIENVENIDO", description: "La aplicacion te ayudara a navegar atravez de realidad aumentada los valores que posee cada persona en el aula de clases", imageUrl: "../../../assets/img/image1.jpg"},
    {title: "REALIDAD AUMENTADA", description: "Realidad Aumentada es un recurso tecnológico que ofrece experiencias interactivas al usuario a partir de la combinación entre la dimensión virtual y la física, con la utilización de dispositivos digitales.", imageUrl: "../../../assets/img/image2.png"},
    {title: "MODO DE USO", description: "Debe enfocar su camara a los marcadores que posee el libro, cada marcador es un valor diferente que se puede descubrir solo enfocando su camara hacia el.", imageUrl: "../../../assets/img/image3.png"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
