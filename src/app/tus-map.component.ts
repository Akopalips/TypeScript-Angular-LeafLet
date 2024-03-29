
import { Component, OnInit } from '@angular/core';
import 'leaflet';
declare let L;

@Component({
  selector: 'TusMapMain',
  templateUrl: './tus-map.component.html',
  styleUrls: ['./tus-map.component.css']
})

export class TusMapMain{

  //ngOnInit вызывается сразу после того, как свойства, привязанные к данным, были проверены в первый раз и до того, как был проверен любой из его дочерних элементов. Он вызывается только один раз, когда директива создается.
  ngOnInit() {
    const map = L.map('LeafletMap').setView([56.010569, 92.852545], 11);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoidHVzcHJpbmciLCJhIjoiY2p4dTdsOW54MDJ3ejNtcDk5czFjMWYyOSJ9.Tp41AghE2hkJ3mRnn023tA'
    }).addTo(map);


    document.getElementById("mapX").oninput = onMapsInputsChanged;
    document.getElementById("mapY").oninput = onMapsInputsChanged;
    function onMapsInputsChanged(){
      map.setView([
      document.getElementById("mapX").value,
      document.getElementById("mapY").value],
      );};


    var mapcenter = map.getCenter();
    (<HTMLInputElement> document.getElementById("mapX")).value = mapcenter.lat;
    (<HTMLInputElement> document.getElementById("mapY")).value = mapcenter.lng;
    




    map.on('click',
    function (e) {
      
      if (!this.flag) {
        this.marker = L.marker(e.latlng).addTo(map);
        this.marker.dragging.enable();
        this.marker.on(
          'drag', 
          function(e) {
            (<HTMLInputElement> document.getElementById("markerX")).value = e.latlng.lat.toFixed(6);
            (<HTMLInputElement> document.getElementById("markerY")).value = e.latlng.lng.toFixed(6);
          }
        );
        this.flag = '1';
      }
      else{
        this.marker.setLatLng(e.latlng);
      }
      (<HTMLInputElement> document.getElementById("markerX")).value = e.latlng.lat.toFixed(6);
      (<HTMLInputElement> document.getElementById("markerY")).value = e.latlng.lng.toFixed(6);

      document.getElementById("markerX").oninput = onMarkersInputsChanged;
      document.getElementById("markerY").oninput = onMarkersInputsChanged;
      var marker = this.marker;
      function onMarkersInputsChanged(){
        marker.setLatLng([
        document.getElementById("markerX").value,
        document.getElementById("markerY").value]
        );
      };

    })




    map.on('drag', 
    function (e) {
      (<HTMLInputElement> document.getElementById("mapX")).value = e.target.getCenter().lat.toFixed(6);
      (<HTMLInputElement> document.getElementById("mapY")).value = e.target.getCenter().lng.toFixed(6);
    });
  }
}
//console.log(e.target.getCenter() )