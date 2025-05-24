fetch("https://raw.githubusercontent.com/code-andrewy/Schoolwork/main/main.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("content").innerHTML = data;
  })
  .catch(error => {
    console.error("Error loading HTML:", error);
    document.getElementById("content").innerText = "Failed to load content.";
  });
