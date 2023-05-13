import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { sportEvent } from 'src/interfaces/soccer-info.interface';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus: boolean = false;

  constructor(
    public socket: Socket,
    private router: Router
  ) {
    this.checkStatus();
  }

  checkStatus(){
    this.socket.on('connect', ()=>{
      console.log('Conectado al servidor');
      this.socketStatus = true;
    })

    this.socket.on('disconnect', ()=>{
      console.log('Desconectado al servidor');
      this.socketStatus = false;
    })
  }

  emit( evento: string, payload?: any, callback?: Function  ){
    console.log('Se emitió', evento);
    this.socket.emit(evento, payload, callback);
  }

  listenSoccerInfo(evento: string){
    return this.socket.fromEvent<sportEvent>( evento );
  }

  loginWS( nombre: string ){
    // return new Promise((resolve, reject)=>{
    //   this.socket.emit( 'configurar-usuario', { nombre }, (resp: any)=>{

    //     this.usuario = new Usuario( nombre );

    //     this.guardarStorage();
    //     resolve(resp);
    //   })
    // })
  }

  logoutWS( nombre: string){
    return new Promise((resolve, reject)=>{
      this.socket.emit( 'desconectar-usuario', { nombre }, (resp: any)=>{
        resolve(resp);
      })
    })
  }

  // leerStorage(){
  //   if (localStorage.getItem('usuario')){
  //     const usuario = JSON.parse( localStorage.getItem('usuario')! );
  //     this.loginWS(usuario.nombre).then( () => {
  //       this.router.navigate(['/chat']);
  //     });
  //   }
  // }
}
