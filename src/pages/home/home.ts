import { Component, AfterViewInit} from '@angular/core';
import { NavController, Events} from 'ionic-angular';
import {UsuarioClient} from "../../providers/usuario-client";
import {Usuario} from "../../providers/usuario";

import {AddUsuario} from "../add-usuario/add-usuario";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:Usuario[];

  constructor(public navCtrl: NavController, private client:UsuarioClient
    , private events:Events) {
    this.data = [];
    this.loadUsers();
    this.events.subscribe("reloadHome",()=>{
      this.loadUsers();
    });
  }

  loadUsers(){
    console.log("entro");
    this.client.getAll().subscribe((res)=>{this.data = res});
  }

  
  goToAdd(){
    this.navCtrl.push(AddUsuario);
  }

}
