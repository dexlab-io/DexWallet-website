exports.onServiceWorkerUpdateReady= () => window.location.reload(true);

exports.onServiceWorkerUpdateFound = () => {
  window.navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}