import { Component } from '@angular/core';


@Component({
  selector: 'app-gps',
  template: `
    <button (click)="getLocation()">Obtener Ubicación</button>
    <p *ngIf="latitude && longitude">Latitud: {{ latitude }}, Longitud: {{ longitude }}</p>
  `,
})
export class GpsComponent {
  latitude: number | undefined;
  longitude: number | undefined;

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      },
      (error) => {
        console.error('Error al obtener la ubicación:', error);
      }
    );
  }
}
