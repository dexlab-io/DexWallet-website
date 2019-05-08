exports.onServiceWorkerUpdateFound = () => {
  window.navigator.serviceWorker
    .getRegistrations()
    .then(function(registrations) {
      for (const registration of registrations) {
        registration.unregister();
        setTimeout(() => {
          window.location.reload(true);
        }, 1000);
      }
    });
};
