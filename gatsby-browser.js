// exports.onServiceWorkerUpdateReady= () => window.location.reload(true);

exports.onServiceWorkerUpdateFound = () => {
  window.navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
      }
    });
};
