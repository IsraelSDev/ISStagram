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
    ])
  ]

})
export class AcessoComponent implements OnInit {

  animCarregado: string = 'carregado';
  isLogin = true;


  constructor() { }

  ngOnInit() {
  }

  irCadastro(event: any) {
    this.isLogin = !this.isLogin;
  }

}
