import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private ws: WebsocketService){
    ws.listenSoccerInfo('sport-info').subscribe( data =>{
      console.log(data);
    })
  }

  
}
