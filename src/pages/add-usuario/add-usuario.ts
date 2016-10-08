import { Component } from '@angular/core';
import { NavController, ToastController, Events } from 'ionic-angular';
import {Usuario} from "../../providers/usuario";
import {UsuarioClient} from "../../providers/usuario-client";

/*
  Generated class for the AddUsuario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-usuario',
  templateUrl: 'add-usuario.html'
})
export class AddUsuario {

  usuario:Usuario;

  constructor(public navCtrl: NavController
    , private client:UsuarioClient
    , private toast:ToastController
    , private events:Events
    ) {
    this.usuario =  new Usuario();
  }

  save(){
    this.client.insert(this.usuario).subscribe(
      (res)=>{
        this.processResponse(res);
        this.events.publish("reloadHome");
        this.navCtrl.pop();
      }
      , (err)=>this.processResponse(false));
  }

  processResponse(success:boolean){
    let msg;
    if(success){
      msg = this.toast.create({message:"Exito !", duration:3000});
      
    }else{
      msg = this.toast.create({message:"Error !", duration:3000});
    }
    msg.present();
  }

}
