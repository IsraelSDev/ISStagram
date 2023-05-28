import { trigger, style, state, animate, transition, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('loadBanner', [
      state('carregado', style({
        opacity: 1
      })),
      transition('void => carregado', [
        style({
          opacity: 0,
          transform: 'translate(-200px, 0)'
        }),
        animate('500ms 0s ease-in-out')
      ])
    ]),
    trigger('loadSecondCol', [
      state('carregado', style({
        opacity: 1
      })),
      transition('void => carregado', [
        style({
          opacity: 0,
          transform: 'translate(200px, 0)'
        }),
        animate('500ms 200ms ease-in-out')
      ])
    ]),

    trigger('virarCard', [
      transition('back <=> front', [
        animate('1s 0s ease-in',
          keyframes([
            style({
              transform: 'perspective(400px) rotateY(-180deg)',
              offset: 0
            }),
            style({
              transform: 'perspective(800px) rotateY(0deg)',
              offset: 0.5
            }),
          ]))
      ])
    ])
  ]

})
export class AcessoComponent implements OnInit {

  animCarregado: string = 'carregado';
  backFront: string = 'back';
  isLogin = true;


  constructor() { }

  ngOnInit() {
  }

  irCadastro(event: any) {
    this.backFront === 'back' ? this.backFront = 'front' : this.backFront = 'back';
    this.isLogin = !this.isLogin;
  }

}
