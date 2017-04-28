import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 LatLng,
 CameraPosition,
 GoogleMapsEvent,
 MarkerOptions,
 CircleOptions
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public googleMaps: GoogleMaps
  ) {
  }

  ionViewDidLoad() {
    this.getPosition();
  }

  private getPosition(){
    this.geolocation.getCurrentPosition()
    .then(position=>{
      this.loadMap(position);
    })
    .catch(error =>{
      console.error(error);
    })
  }

  private loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);

    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);

    let myPosition: LatLng = new LatLng(latitude, longitude);

    let cameraPosition:CameraPosition = {
      target: myPosition,
      zoom: 18,
      tilt: 30
    };

    map.one(GoogleMapsEvent.MAP_READY)
    .then(()=>{
      console.log("yupi!!!!!!");
      map.moveCamera(cameraPosition);

      let markerOptions: MarkerOptions = {
        title: 'aqui estoy',
        position: myPosition,
        draggable: true,
      };

      map.addMarker( markerOptions );

      let circle:CircleOptions ={
        center: myPosition,
        radius: 30000
      }

      map.addCircle( circle );

      let markers = this.generateMarkers(latitude, longitude, 8);
      markers.forEach(marker =>{
        map.addMarker(marker);
      });
    })
    .catch(error =>{
      console.log(error);
    })
  }

  private generateMarkers(latitude:number, longitude: number, limit: number){
    let markers: any[] = [];
    for(let i =0;i<limit;i++){
      markers.push({
        title: 'hola ' + i,
        position: new LatLng(latitude + Math.random() * (1 - (-1)) + (-1), longitude + Math.random() * (1 - (-1)) + (-1))
      });
    }
    return markers;
  }

}
