import { Component, OnInit, Injectable } from '@angular/core';
import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile';
import XYZSource from 'ol/source/XYZ';
import Point from 'ol/geom/Point.js';
import { Cluster, OSM, Vector as VectorSource } from 'ol/source.js';
import { Vector as VectorLayer } from 'ol/layer.js';
import { Icon, Style, Circle as CircleStyle, Fill } from 'ol/style.js';
import { fromLonLat } from 'ol/proj.js';
import { LocationService } from '../../providers/location/location.service';
import { Weather } from '../../models/weather';
import { map, tap } from 'rxjs/operators/';
import { MatDialog } from '@angular/material';
import { WeatherDialogComponent } from '../../components/weather-dialog/weather-dialog.component';
import { axisRight } from 'd3';
import { Position } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {
  constructor(
    private locationService: LocationService,
    private dialog: MatDialog
  ) {}

  // Variables used in this component.
  public myLocation: Weather = null;
  public defaultPosition = this.formLocation(-0.11, 51.52);
  public map: any = null;
  // public iconWeather: string = null;
  public requestInProgress = false;
  public iconCurrentWeather: string = null;
  public positionFound = null;

  public clustersLayer = new VectorLayer({});

  // Map Config
  public vectorSource = new VectorSource({});

  // Create instance of View
  public view = new View({
    center: this.defaultPosition,
    zoom: 5,
    maxZoom: 19,
    minZoom: 3
  });

  ngOnInit() {
    this.initMap();
  }

  // Init Map function.
  public initMap() {
    this.map = null;
    this.map = new Map({
      target: document.getElementById('map-container'),
      layers: [
        new TileLayer({
          source: new XYZSource({
            url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
          })
        })
      ],
      view: this.view
    });
  }

  public searchLocation(loc: any) {
    // Clear layers to remove previous marker
    this.map.removeLayer(this.clustersLayer);

    // Clearing variables before assigning
    this.vectorSource = new VectorSource({});
    this.requestInProgress = true;
    if (loc) {
      // Get location
      this.locationService
        .getLocation(loc)
        .then(location => {
          this.myLocation = location;

          this.positionFound = this.formLocation(
            this.myLocation.location['lon'],
            this.myLocation.location['lat']
          );

          this.iconCurrentWeather = this.myLocation.current['condition'][
            'icon'
          ];

          // Update the view and focus on location searched
          this.view.animate({
            center: this.positionFound,
            duration: 1500,
            zoom: 8
          });

          this.clustersLayer = new VectorLayer({
            source: new VectorSource({
              features: [
                new Feature({
                  geometry: new Point(this.positionFound)
                })
              ]
            }),
            style: new Style({
              image: new Icon({
                anchor: [0.5, 40],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: this.iconCurrentWeather
              })
            })
          });

          this.map.addLayer(this.clustersLayer);

          // Activate click event.
          this.cityWeather(this.myLocation);

          this.requestInProgress = false;
        })
        .catch(error => {
          this.requestInProgress = false;
          console.log('Error::', error);
        });
    }
  }

  public cityWeather(data) {
    this.map.on('click', evt => {
      const feature = this.map.forEachFeatureAtPixel(evt.pixel, ft => {
        return ft;
      });
      if (
        feature &&
        feature.geometryChangeKey_ &&
        feature.geometryChangeKey_.target instanceof Point
      ) {
        this.weatherDialog(data);
      }
    });
  }

  // Form geo localisation (longitude, latitude)
  public formLocation(lon: number, lat: number) {
    const position = fromLonLat([lon, lat]);
    return position;
  }

  public weatherDialog(dataWeather) {
    const dialogRef = this.dialog.open(WeatherDialogComponent, {
      width: '950px',
      height: '80%',
      panelClass: 'custom-dialog-container',
      data: {
        data: dataWeather
      }
    });

    // After closing Dialog we refresh page to initialize Page with all map features
    dialogRef.afterClosed().subscribe(_ => {
      setTimeout(() => {
        location.reload();
      }, 500);
    });
  }
}
