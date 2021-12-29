// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/Services/auth.service';
import {Storage} from '@ionic/storage';
import Swal from 'sweetalert2';
import {AlertController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-verification-tel',
  templateUrl: './verification-tel.page.html',
  styleUrls: ['./verification-tel.page.scss'],
})
export class VerificationTelPage implements OnInit {
  veritelForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private authSrv: AuthService, private storage: Storage, private alertCtrl: AlertController,private loadingController: LoadingController) { }

  ngOnInit() {
    this.veritelForm= this.formBuilder.group({
        username: ['', [Validators.required, Validators.pattern('7[7|6|8|0|5][0-9]{7}$')]],
        password: ['passer123'],
    }
    );
  }
  get errorControl(){ return this.veritelForm.controls; }

  // @ts-ignore
 async onSubmit() {
  this.submitted = true;
    if (this.veritelForm.invalid){
      return null;
    }
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    this.veritelForm.value.password= 'passer123';
    this.authSrv.authentif(this.veritelForm.value).subscribe(
      async data=>{
        console.log(data);
        await this.storage.set('token', data.token);
        const tokenDecode = this.authSrv.decodeToken(data.token);
        await loading.dismiss();
        this.veritelForm.reset();
        await this.router.navigate(['main']);
      },
      async (error: any) => {
        await loading.dismiss();
        await this.presentAlert();
      }
    );
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'error',
      buttons: ['OK']
    });
    await alert.present();
  }
}

