import { IUsuarioLogin } from './../models/usuario.model';

import { Injectable } from '@angular/core';
import { IUsuario } from '../models/usuario.model';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


@Injectable()
export class AuthService {

  auth = getAuth();

  constructor(

  ) { }
  cadastrarUsuario(usuario: IUsuario) {
    createUserWithEmailAndPassword(this.auth, usuario.email, usuario.senha).then(val => {
      const db = getDatabase();
      delete usuario.senha;
      set(ref(db, 'users/' + val.user.uid), {
        username: usuario.nomeUsuario,
        email: usuario.email,
        fullName: usuario.nomeCompleto
      });
    })
  }

  logarUsuario(usuario: IUsuarioLogin) {
    console.log(usuario);
    signInWithEmailAndPassword(this.auth, usuario.email, usuario.senha).then(user => {
      console.log(user);
    }).catch((error: Error) => {
      console.error(error);
    })
  }
}


