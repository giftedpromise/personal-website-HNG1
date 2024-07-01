function updateTime() {
  const now = new Date();
  const utcTime = now.toISOString().split("T")[1].split(".")[0];
  const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

  document.getElementById("currentTimeUTC").textContent = utcTime;
  document.getElementById("currentDay").textContent = dayOfWeek;
}

// Update time on load
updateTime();

// Update time every second
setInterval(updateTime, 1000);
