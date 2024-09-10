import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  nom="";
  dire="";
  email="";
  contrasena="";

  constructor(private alertcontroller: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

}
