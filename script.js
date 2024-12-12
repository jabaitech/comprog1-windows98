/*
    From original wendos10 / Less functions since less content
    Simplified and hardcoded kasi ang buggy ahhaha
*/
let count = 0;
function openWindow() {

    try {
        document.getElementById('WINDOW_HOLDER').style.display = 'flex';
    } catch(err) {
        console.error("Error: " + err)
    }
    
}
function closeWindow() {
    try {
        document.getElementById('WINDOW_HOLDER').style.display = 'none';
    } catch(err) {
        console.error("Error: " + err)
    }   
}

function changeIframe(url, windowName, icon) {
    document.getElementById('content-iframe').src = url;
    document.getElementById('windowName').innerText = windowName;
    document.getElementById('topbarIcon').src = icon
    openWindow();
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    document.getElementById("time").innerText = `${hours}:${minutes} ${ampm}`;
}

document.addEventListener("DOMContentLoaded", function () {
    closeWindow();
    updateTime();
    setInterval(updateTime, 60000);
});

document.addEventListener('contextmenu', event => event.preventDefault());