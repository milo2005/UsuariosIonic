import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/observable"; 
import {Usuario} from './usuario';


/*
  Generated class for the UsuarioClient provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsuarioClient {

  url:string = "http://localhost:8080/usuarios";
  //url:string = "http://10.0.2.2:8080/usuarios";

  constructor(public http: Http) {}

  getAll():Observable<Usuario[]>{
    return this.http.get(this.url).map(this.processArray).catch(this.processCatch);
  }

  insert(usuario:Usuario){
    return this.http.post(this.url, usuario).map(this.process).catch(this.processCatch);

  }

  private process(res:Response){
    let body =  res.json();
    return body.success;
  }

  private processArray(res:Response){
     let body = res.json();
     return body; 
  }

  private processCatch(){
    return Observable.throw(true);
  }

}
