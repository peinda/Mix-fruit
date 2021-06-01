import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationTelPageRoutingModule } from './verification-tel-routing.module';

import { VerificationTelPage } from './verification-tel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationTelPageRoutingModule
  ],
  declarations: [VerificationTelPage]
})
export class VerificationTelPageModule {}
