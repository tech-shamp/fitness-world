const Script = () => {
  console.info("Modern React Responsive Website")

  // Allow Push Notifications on Browser
  window.addEventListener("load", () => {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        const notif = new Notification("Modern React Responsive Website", {
          body: "Modern React Responsive Website Created with React JS Technology by Meta from Facebook.",
          icon: "img/bubble.png",
          vibrate: true,
        })
        notif.addEventListener("error", (e) => {
          alert(e)
        })
      } else console.error(`Permission Request ${perm}`)
    })
  })

  let notification
  let interval
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      Notification.requestPermission()
      const leaveDate = new Date()
      interval = setInterval(() => {
        notification = new Notification("Please Come Back", {
          body: `You have been out for ${Math.round(
            (new Date() - leaveDate) / 1000,
          )} seconds`,
          icon: "img/bubble.png",
          tag: "Leave Interval",
          vibrate: true,
        })
      }, 10000)
    } else {
      if (interval) clearInterval(interval)
      if (notification) notification.close()
    }
  })
}

export default Script
