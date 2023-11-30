self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: 'assets/icons/icon-72x72.png',
    badge: 'assets/icons/badge.png',
  };

  event.waitUntil(
    self.registration.showNotification('Tu Aplicación', options)
  );
});
