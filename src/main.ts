import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch((error) => {
        console.log('Error al registrar el Service Worker:', error);
      });
  }

  if (Notification.permission !== 'granted') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Permiso para notificaciones push concedido.');
      } else {
        console.error('Permiso para notificaciones push denegado.');
      }
    });
  }

  if (Notification.permission === 'granted') {
    const notificationOptions = {
      body: '¡Hola! Esta es una notificación push.',
      icon: 'assets/icons/icon-72x72.png',
    };

    new Notification('Tu Aplicación', notificationOptions);
  }


// //CELULAR

// if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then((stream) => {
//       // Aquí puedes usar el stream para mostrar la vista previa de la cámara
//     })
//     .catch((error) => {
//       console.error('Error al acceder a la cámara:', error);
//     });
// }

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       // Aquí puedes usar la posición obtenida (position.coords.latitude, position.coords.longitude, etc.)
//     },
//     (error) => {
//       console.error('Error al obtener la posición GPS:', error);
//     }
//   );
// }


//   if (Notification.permission !== 'granted') {
//     Notification.requestPermission().then((permission) => {
//       if (permission === 'granted') {
//         console.log('Permiso para notificaciones concedido.');
//       } else {
//         console.error('Permiso para notificaciones denegado.');
//       }
//     });
//   }

//   if (Notification.permission === 'granted') {
//     const notificationOptions = {
//       body: '¡Hola! Esta es una notificación.',
//       icon: 'icon.png',
//     };

//     new Notification('Título de la notificación', notificationOptions);
//   }






