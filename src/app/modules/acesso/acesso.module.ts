import { AuthService } from './../../shared/services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcessoComponent } from './acesso.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"


@NgModule({
  declarations: [
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,

  ],
  exports: [
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent
  ]
})
export class AcessoModule { }
