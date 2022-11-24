import navbar from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let getData = JSON.parse(localStorage.getItem("name"));

let Display_Name = document.getElementById("Name");
Display_Name.innerText = getData;
Display_Name.style.cursor="pointer"

Display_Name.addEventListener("click", () => {
  let S1 = (Display_Name.innerText = null);

  getData = S1;

  localStorage.setItem("name", JSON.stringify(getData));

  window.location.href = "Random.html"
});
