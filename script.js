const countries = document.querySelectorAll(".country");

// Container for country grid
const countryGrid = document.createElement("div");
countryGrid.id = "countryGrid";

// Grid styling
countryGrid.style.display = "grid";
countryGrid.style.gridTemplateColumns = "repeat(auto-fill, minmax(120px, 1fr))";
countryGrid.style.gap = "8px";
countryGrid.style.marginTop = "20px";
countryGrid.style.padding = "10px";

// Add under SVG
document.querySelector("svg").after(countryGrid);

// Track names already added
const addedCountries = new Set();

countries.forEach(country => {
  // Country click event
  country.addEventListener("click", () => {
    alert("You clicked: " + country.id);
  });

  // Skip duplicates
  if (addedCountries.has(country.id)) return;

  addedCountries.add(country.id);

  // Create country div
  const countryBox = document.createElement("div");
  countryBox.textContent = country.id;
  countryBox.style.border = "1px solid #ccc";
  countryBox.style.padding = "8px";
  countryBox.style.textAlign = "center";
  countryBox.style.background = "#f5f5f5";
  countryBox.style.cursor = "pointer";

  // Clicking box triggers same action
  countryBox.addEventListener("click", () => {
    alert("You clicked: " + country.id);
  });

  countryGrid.appendChild(countryBox);
});