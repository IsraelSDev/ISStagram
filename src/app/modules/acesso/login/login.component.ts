import { IUsuarioLogin } from './../../../shared/models/usuario.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Output() irCadastro = new EventEmitter()

  formLogin: FormGroup;

  constructor(
    private auth: AuthService
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  irCadastrar() {
    this.irCadastro.emit()
  }

  submitLogin() {
    const user: IUsuarioLogin = {
      email: this.formLogin.value.email,
      senha: this.formLogin.value.senha
    }
    this.auth.logarUsuario(user);
  }

}
