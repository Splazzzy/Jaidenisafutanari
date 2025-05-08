const validCodes = [
  "JASONISFOOT",
  "ANDREWISFOOT",
  "JAIDENISFOOT",
  "JORGEISFOOT",
  "GAVINISFOOT"
];

function checkAccess() {
  const input = document.getElementById("access-code").value;
  const error = document.getElementById("error");
  if (validCodes.includes(input)) {
    window.location.href = "games.html";
  } else {
    error.textContent = "Invalid access code.";
  }
}
