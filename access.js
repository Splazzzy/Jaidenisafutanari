const validCodes = [
  "3932-8361-9243",
  "2132-4372-5567",
  "1237-0128-3242",
  "9162-1623-9174",
  "9321-5315-8263",
  "2321-4312-6424",
  "1221-8364-1238",
  "2123-8462-9173",
  "9382-9471-1240"
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
