import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email="";
  contrasena="";

  constructor(private alertcontroller: AlertController,
              private router: Router) { }

ngOnInit() {
}

}