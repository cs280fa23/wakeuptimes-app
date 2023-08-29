function calcWakeUpTimes() {
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);

  const wakeUpTime = new Date(fallAsleepTime);
  const wakeUpTimes = [];
  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });
    wakeUpTimes.push(wakeUpTimeString);
  }

  console.log("Wake-up times:", wakeUpTimes.join(", "));
}

const calcBtn = document.getElementById("calc-btn");
calcBtn.onclick = calcWakeUpTimes;