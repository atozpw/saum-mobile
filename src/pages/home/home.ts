import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openMenuRombongan() {
    this.navCtrl.push('ListJamaahPage');
  }

  openMenuBerita() {
    this.navCtrl.push('ListNewsPage');
  }

  openMenuKegiatan() {
    this.navCtrl.push('ListSchedulePage');
  }

  openMenuDoa() {
    this.navCtrl.push('ListDoaPage');
  }

  openMenuMap() {
    this.navCtrl.push('MapPage');
  }

  openMenuWeather() {
    this.navCtrl.push('WeatherPage');
  }

  openAlert() {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'Features is under development!',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
