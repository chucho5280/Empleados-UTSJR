import { Component } from '@angular/core';



@Component({
  selector: 'app-camera',
  template: `
    <button (click)="startCamera()">Iniciar Cámara</button>
    <video *ngIf="cameraStream" [srcObject]="cameraStream" autoplay></video>
  `,
})
export class CameraComponent {
  cameraStream: MediaStream | undefined;

  async startCamera() {
    try {
      this.cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
    }
  }
}
