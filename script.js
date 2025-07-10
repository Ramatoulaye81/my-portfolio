document.getElementById("recommendationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && message) {
    const newRec = document.createElement("div");
    newRec.className = "recommendation";
    newRec.innerHTML = `<p>"${message}"</p><strong>- ${name}</strong>`;
    document.getElementById("recommendationList").appendChild(newRec);

    alert("Thank you for your recommendation!");
    document.getElementById("recommendationForm").reset();
  } else {
    alert("Please fill in all the fields.");
  }
});
