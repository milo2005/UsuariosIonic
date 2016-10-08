import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {UsuarioClient} from "../providers/usuario-client";
import { AddUsuario } from "../pages/add-usuario/add-usuario";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddUsuario
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddUsuario
  ],
  providers: [UsuarioClient]
})
export class AppModule {}
