document.getElementById("anniversaryForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const anniversaryDate = document.getElementById("anniversaryDate").value;
  if (anniversaryDate) {
    window.location.href = `love.html?date=${anniversaryDate}`;
  }
});
