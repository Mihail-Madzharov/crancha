import { Component, OnInit } from '@angular/core';
import { MapFacade } from '@crancha/domain';
const mapTerrain = [
  'hybrid',
  /** This map type displays a normal street map. */
  'roadmap',
  /** This map type displays satellite images. */
  'satellite',
  /** This map type displays maps with physical features such as terrain and vegetation. */
  'terrain'
];
@Component({
  selector: 'crancha-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public paths = this.mapFacade.paths;
  constructor(private mapFacade: MapFacade) {}
  public center = { lat: 42.0987626, lng: 24.1593068 };
  public mapTerrain = mapTerrain;
  ngOnInit() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      },
      err => {
        console.log(err);
      }
    );
    this.mapFacade.loadPaths();
  }

  onPloylineClick(plyline) {
    console.log(plyline);
  }
}
