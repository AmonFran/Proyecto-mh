import { Component, OnInit } from '@angular/core';
import { ConectarAppService } from './conectar-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mhidle';
  constructor(private conectarAppService:ConectarAppService){

  }
  ngOnInit(){
    this.conectarAppService.cargarTodo();
  }
}
