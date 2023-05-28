import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() irLogin = new EventEmitter()

  cadastroForm: FormGroup;

  constructor() {
    this.cadastroForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      nomeCompleto: new FormControl('', [Validators.required,]),
      nomeUsuario: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  submitFormCadastro() {
    console.log(this.cadastroForm.value);
  }

  irLogar() {
    this.irLogin.emit()
  }
}
