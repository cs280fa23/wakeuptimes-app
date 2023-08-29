const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");

function calcWakeUpTimes() {
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);

  const wakeUpTime = new Date(fallAsleepTime);
  wakeUpHoursDiv.innerHTML = "";
  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });
    const cycleDiv = document.createElement("div");
    cycleDiv.classList.add("cycle");
    cycleDiv.setAttribute("id", `cycle-${i}`);
    cycleDiv.textContent = wakeUpTimeString;
    wakeUpHoursDiv.appendChild(cycleDiv);
  }
}

const calcBtn = document.getElementById("calc-btn");
calcBtn.onclick = calcWakeUpTimes;
