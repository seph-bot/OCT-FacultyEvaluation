

const pages = {
  "ICT-LYRA": "pages/ICT_Lyra.html",
  "ICT-RUBY": "pages/ICT_Ruby.html",
  "HE-CENTAURUS": "pages/HE_Centaurus.html",
  "HE-CASIOPEIA": "pages/HE_Casiopeia.html",
};

document.getElementById("studentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const strand = document.getElementById("strand").value;
  const section = document.getElementById("section").value;
  const routeKey = `${strand}-${section}`;

  if (pages[routeKey]) {
      window.location.href = pages[routeKey];
  } else {
      alert("CHECK YOUR SECTION, HINDI KA DIYAN.");
  }
});

function logout() {
  window.location.href = '../index.html';
  alert("Logged out successfully!");
}
