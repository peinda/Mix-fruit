import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-couverture-appli',
  templateUrl: './couverture-appli.page.html',
  styleUrls: ['./couverture-appli.page.scss'],
})
export class CouvertureAppliPage implements OnInit {

  constructor(private loading: LoadingController,private router: Router) { }

  ngOnInit() {
    this.loading.create({
    })
      .then(loading => {
        loading.present();
        setTimeout(() => {
          loading.dismiss();
          this.router.navigate(['/create-compte']);
        }, 2000);
      }) ;
  }
}
