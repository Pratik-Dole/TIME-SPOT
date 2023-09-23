// Creating A Logic For Populate The Time-Zone Of Entire World :: 
let alarmTriggered = false; // Initialize the flag

const currentDate = () =>{
    let myDate = new Date();
    
    india.innerHTML = myDate.toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: false,
    }).split(", ")[1];
 
    usa.innerHTML = myDate.toLocaleString("en-US", {
        timeZone: "America/New_York",
        hour12: false,
    }).split(", ")[1];
    
    china.innerHTML = myDate.toLocaleString("en-US", {
        timeZone: "Asia/Shanghai",
        hour12: false,
    }).split(", ")[1];

    let hours = alarm.value.split(":")[0];
    let minutes = alarm.value.split(":")[1];
    let song = new Audio('/Audio/alarm.mp3');
    if (myDate.getHours() == hours && myDate.getMinutes() == minutes) {
        if (!alarmTriggered) { // Check if the alarm hasn't been triggered yet
          song.play();
          alarmTriggered = true; // Set the flag to indicate the alarm has been triggered
        }
      } else {
        alarmTriggered = false; // Reset the flag when the alarm time is not met
      }
}

let myDate = new Date();

setInterval(() => {
    currentDate();
}, 1000);

// ............................................................ 