import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapOptions, GoogleMapsEvent } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: GoogleMap;

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.platform.ready().then(()=>{
      this.loadMap();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  loadMap() {
    let options: GoogleMapOptions = {
      controls: {
        compass: true,
        myLocation: true,
        myLocationButton: true,
        mapToolbar: true
      },
      camera: {
        target: {
          lat: -6.9166642,
          lng: 107.6172323
        },
        zoom: 13,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas', options);
    this.map.one(GoogleMapsEvent.MAP_READY).then(this.onMapReady.bind(this));
  }

  onMapReady() {
    console.log('map is ready!');
  }

}
