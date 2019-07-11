
import { Component, OnInit } from '@angular/core';
import 'leaflet';
declare let L;

@Component({
  selector: 'TusMap',
  templateUrl: './tus-map.component.html',
  styleUrls: ['./tus-map.component.css']
})

export class TusMap implements OnInit {
  constructor() {}
  map;
  marker;

  //ngOnInit вызывается сразу после того, как свойства, привязанные к данным, были проверены в первый раз и до того, как был проверен любой из его дочерних элементов. Он вызывается только один раз, когда директива создается.
  ngOnInit() {
    const map = L.map('Leaflet-Map').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoidHVzcHJpbmciLCJhIjoiY2p4dTdsOW54MDJ3ejNtcDk5czFjMWYyOSJ9.Tp41AghE2hkJ3mRnn023tA'
    }).addTo(map);


      
    this.marker = 123

    this.map = map.getCenter()
    
    function onMapClick(e) {
      L.marker(e.latlng).addTo(map);
      this.marker = e.latlng
    }
    function onMapMoved(e) {
      this.this.map = map.getCenter()
    }


 
    map.on('click', onMapClick);
    //map.on('clmousemoveick', onMapMoved);
    
  }
}
/*
todo:
  Maps and markers coords should upgrading each time they changed
    Cords from leaflet and form'text' should bind to each other
      ???
    ???

//may it be worth moving the map to two tables?

*/
