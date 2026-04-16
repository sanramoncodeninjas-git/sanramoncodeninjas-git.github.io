const countries = document.querySelectorAll(".country");

countries.forEach(country => {
  country.addEventListener("click", () => {
    alert("You clicked: " + country.id);
  });
});