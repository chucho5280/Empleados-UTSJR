import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearEmpleadoComponent } from './pages/crear-empleado/crear-empleado.component';
import { ListarEmpleadosComponent } from './pages/listar-empleados/listar-empleados.component';
import { EditarEmpleadoComponent } from './pages/editar-empleado/editar-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EmpleadoService } from './services/empleado.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CameraComponent } from './pages/camera/camera.component';
import { GpsComponent } from './pages/gps/gps.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearEmpleadoComponent,
    ListarEmpleadosComponent,
    EditarEmpleadoComponent,
    CameraComponent,
    GpsComponent,
    NotificacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
