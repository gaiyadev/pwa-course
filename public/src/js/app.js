if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => {
      console.log("ServiceWorker is registered");
    })
    .catch((err) => console.log(err));
}
