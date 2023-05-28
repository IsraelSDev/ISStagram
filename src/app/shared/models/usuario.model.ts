export type IUsuario = {
  email: string;
  nomeCompleto: string;
  nomeUsuario: string;
  senha: string | any;
}

export type IUsuarioLogin = {
  email: string;
  senha: string;
}
