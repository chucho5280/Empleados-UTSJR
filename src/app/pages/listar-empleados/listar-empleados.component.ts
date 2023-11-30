import {EmpleadoService} from 'src/app/services/empleado.service'
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  //propiedades
  empleados:any = [];

  constructor(private empleadoService:EmpleadoService){
    this.getEmpleados();
  }

  ngOnInit(): void{

  }

  //metodo para obtener todos los empleados
  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe((data)=>{
      this.empleados = data;
    })
  }

  //metodo para eliminar un empleado
  eliminarEmpleado(empleado, index){
    if(window.confirm('¿Estas seguro que lo deseas eliminar?')){
      this.empleadoService.deleteEmpleado(empleado._id)
      .subscribe((data) =>{
        this.empleados.splice(index,1);
      })
    }
  }
}


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

@Component({
  selector: 'app-notifications',
  template: `
    <button (click)="showNotification()">Mostrar Notificación</button>
  `,
})
export class NotificationsComponent {
  showNotification() {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('¡Hola!', { body: 'Esta es una notificación de ejemplo.' });
        }
      });
    }
  }
}
