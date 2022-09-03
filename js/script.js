const clock = document.querySelector("div.clock span")

const renderClock = () => {
    const date = new Date()
    clock.innerHTML = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2)
}

setInterval(() => {
    renderClock()
}, 1000)