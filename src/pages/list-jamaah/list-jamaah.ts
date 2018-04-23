import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Jamaah } from '../../models/jamaah';
import { Jamaahs } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-jamaah',
  templateUrl: 'list-jamaah.html'
})
export class ListJamaahPage {
  currentItems: Jamaah[];

  constructor(public navCtrl: NavController, public jamaahs: Jamaahs, public modalCtrl: ModalController) {
    this.currentItems = this.jamaahs.query();
  }

  ionViewDidLoad() {
  }
  
  addItem() {
    let addModal = this.modalCtrl.create('JamaahCreatePage');
    addModal.onDidDismiss(jamaah => {
      if (jamaah) {
        this.jamaahs.add(jamaah);
      }
    })
    addModal.present();
  }
  
  deleteItem(jamaah) {
    this.jamaahs.delete(jamaah);
  }
  
  openItem(jamaah: Jamaah) {
    this.navCtrl.push('JamaahDetailPage', {
      jamaah: jamaah
    });
  }
}
