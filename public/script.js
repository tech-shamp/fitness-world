console.info("Modern React Responsive Website")

// Allow Push Notifications on Browser
window.addEventListener("load", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      console.info(`Permission Request ${perm}`)
    } else console.error(`Permission Request ${perm}`)
  })
})

const notif = new Notification("Modern React Responsive Website", {
  body: "Modern React Responsive Website Created with React JS Technology by Meta from Facebook.",
  icon: "img/bubble.png",
  vibrate: true,
})

notif.addEventListener("error", (e) => {
  alert(e)
})
