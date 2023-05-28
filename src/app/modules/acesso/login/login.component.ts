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

  constructor() {
    this.formLogin = new FormGroup({
      login: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  irCadastrar() {
    this.irCadastro.emit()
  }

  submitLogin() {
    console.log(this.formLogin.value);
  }

}
