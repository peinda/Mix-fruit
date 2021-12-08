import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/Services/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  profilForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private authSrv: AuthService, private storage: Storage) { }

  ngOnInit() {
    this.profilForm= this.formBuilder.group({
        prenom: ['', [Validators.required, Validators.minLength(2)]],
        nom: ['', [Validators.required, Validators.minLength(2)]],
        tel: ['', [Validators.required, Validators.pattern('7[7|6|8|0|5][0-9]{7}$')]],
        adress: ['', [Validators.required, Validators.minLength(3)]],
      }
    );
  }
  // @ts-ignore
  onSubmit(){};
}
