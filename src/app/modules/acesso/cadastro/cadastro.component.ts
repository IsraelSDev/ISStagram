import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/shared/models/usuario.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() irLogin = new EventEmitter()

  cadastroForm: FormGroup;

  constructor(
    private authService: AuthService
  ) {
    this.cadastroForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      nomeCompleto: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
      nomeUsuario: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      senha: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
    })
  }

  ngOnInit() {
  }

  submitFormCadastro() {
    const usuario: IUsuario = {
      email: this.cadastroForm.value.email,
      nomeCompleto: this.cadastroForm.value.nomeCompleto,
      nomeUsuario: this.cadastroForm.value.nomeUsuario,
      senha: this.cadastroForm.value.senha
    }

    // this.authService.cadastrarUsuario(usuario);
  }

  irLogar() {
    this.irLogin.emit()
  }
}
