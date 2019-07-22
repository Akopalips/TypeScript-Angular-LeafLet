
import { Component, OnInit } from '@angular/core';
import 'leaflet';
declare let L;

@Component({
  selector: 'Tus-Map-Main',
  templateUrl: './tus-map.component.html',
  styleUrls: ['./tus-map.component.css']
})

export class TusMapMain{

  //ngOnInit вызывается сразу после того, как свойства, привязанные к данным, были проверены в первый раз и до того, как был проверен любой из его дочерних элементов. Он вызывается только один раз, когда директива создается.
  ngOnInit() {
    const map = L.map('LeafletMap').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoidHVzcHJpbmciLCJhIjoiY2p4dTdsOW54MDJ3ejNtcDk5czFjMWYyOSJ9.Tp41AghE2hkJ3mRnn023tA'
    }).addTo(map);




    var mapcenter = map.getCenter();
    (<HTMLInputElement> document.getElementById("mapX")).value = mapcenter.lat;
    (<HTMLInputElement> document.getElementById("mapY")).value = mapcenter.lng;
    

    map.on('click',
    function(e) {
      var marker = L.marker(e.latlng).addTo(map);
      marker.dragging.enable();
      marker.on(
        'drag', 
        function(e) {
      });
      (<HTMLInputElement> document.getElementById("markerX")).value = e.latlng.lat;
      (<HTMLInputElement> document.getElementById("markerY")).value = e.latlng.lng;
    });
    map.on('move', 
    function (e) {
    });

    map.on('drag', 
    function(e) {
    })
    
  }
}
/*
todo:
  Maps and markers coords should upgrading each time they changed
    Cords from leaflet and form'text' should bind to each other
    List of markers
      ???
    ???

https://metanit.com/web/angular2/2.10.php

//may it be worth moving the map to two tables?\*/
