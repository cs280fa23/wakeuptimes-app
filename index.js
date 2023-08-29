const fallAsleepTime = new Date();
fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);
console.log(
  fallAsleepTime.toLocaleTimeString("en-US", {
    timeStyle: "short",
  })
);
