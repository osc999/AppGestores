import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  Nombre="";
  Descripcion="";

  constructor(private alertcontroller: AlertController,
    private router: Router) { }

  ngOnInit() {
  }

}
