import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/libs/core/Services/auth.service';

@Component({
  selector: 'app-couverture-appli',
  templateUrl: './couverture-appli.page.html',
  styleUrls: ['./couverture-appli.page.scss'],
})
export class CouvertureAppliPage implements OnInit {

  constructor(private loading: LoadingController, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.getClientData());
    if (this.authService.getClientData() !== undefined) {
      this.loading.create({
      })
        .then(loading => {
          loading.present();
          setTimeout(() => {
            loading.dismiss();
            this.router.navigate(['/main']);
          }, 2000);
        });
    } else {
      this.loading.create({
      })
        .then(loading => {
          loading.present();
          setTimeout(() => {
            loading.dismiss();
            this.router.navigate(['/verification-tel']);
          }, 2000);
        });
    }
  }
}
