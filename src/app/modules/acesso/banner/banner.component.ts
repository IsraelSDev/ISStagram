import { Component, OnInit, } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { Imagem } from "src/app/shared/models/imagens.model"


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('animarBanner', [
      state('escondido', style({
        opacity: '0'
      })),
      state('visivel', style({
        opacity: '1'
      })),
      transition('escondido <=> visivel', animate("2s ease-in")),
    ])
  ]
})
export class BannerComponent implements OnInit {

  estado: string = 'escondido';
  imagens: Imagem[] = [
    {
      estado: 'visivel',
      url: '/assets/banner-acesso/img_1.png'
    }, {
      estado: 'escondido',
      url: '/assets/banner-acesso/img_2.png'
    }, {
      estado: 'escondido',
      url: '/assets/banner-acesso/img_3.png'
    }, {
      estado: 'escondido',
      url: '/assets/banner-acesso/img_4.png'
    }, {
      estado: 'escondido',
      url: '/assets/banner-acesso/img_5.png'
    }
  ];

  constructor() { }

  ngOnInit() {
    setInterval(() => this.logicaRotacao(), 3000)
  }

  logicaRotacao(): void {
    let index = 1;
    for (let i = 0; i < this.imagens.length; i++) {
      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido';
        index = i === 4 ? 0 : i + 1;
        break
      }
    }
    this.imagens[index].estado = 'visivel';
  }

}
