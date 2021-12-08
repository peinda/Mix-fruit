import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  color= 'red';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  _openModal(){
  };
}
