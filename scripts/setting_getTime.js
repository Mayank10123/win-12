// Settings page time fetching logic  @Mayank

// Get elements with class="settingTime"
const settingTimeElement = document.querySelector('.settingTime');

// Update time function
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0'); // pad zeros
    const seconds = now.getSeconds().toString().padStart(2, '0'); // pad zeros

    let timeOfDay = '';

    if (hours < 12) {
        timeOfDay = 'AM';
    } else if (hours < 18) {
        timeOfDay = 'PM';
    } else {
        timeOfDay = 'PM';
    }

    // Inject time into HTML element
    settingTimeElement.textContent = `${timeOfDay} ${hours}:${minutes}:${seconds}`;
}

// Update time on initial load
updateTime();

// Update time every second
setInterval(updateTime, 1000);
