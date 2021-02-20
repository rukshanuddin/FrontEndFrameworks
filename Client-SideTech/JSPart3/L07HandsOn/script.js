const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName = document.getElementById("lastName");
const fullName = document.getElementById("fullName");

function nameInfo() {
  fullName.innerText = `${firstName.value} ${middleName.value} ${lastName.value}`;
}

document.addEventListener("submit", (e) => {
  e.preventDefault();
  nameInfo();
});
