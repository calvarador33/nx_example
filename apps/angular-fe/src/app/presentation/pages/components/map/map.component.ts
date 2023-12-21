import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { EstablishmentService } from 'apps/angular-fe/src/app/features/service/establishment.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() establishment: any;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow
  dataMap: any;

  display: any;
  center: google.maps.LatLngLiteral
  position: any
  title: string
  contentInfoWindow: string

  zoom = 15

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit(): void {        
    const code = this.establishment.alm_codigo ?? this.establishment.swc_dash_ialm_codigo
    this.establishmentService.getItemMapById(code).subscribe(res => {
      this.dataMap = res
      this.position = { "lat": Number(this.dataMap[0].swc_dash_vLatitud), "lng": Number(this.dataMap[0].swc_dash_vLongitud) }      
      this.center = this.position
      this.title = this.dataMap[0].swc_dash_vEstablecimiento
      this.contentInfoWindow = this.dataMap[0].swc_dash_valmTextoVentanaMapa
    })
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker)
  }


}
