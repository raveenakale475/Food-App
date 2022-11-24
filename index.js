let query = document.getElementById("INPUT").value;

let myfun = async () => {
  console.log(query);

  try {
    const url = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    // console.log("url:", url);

    const convert = await url.json();

    console.log("convert:", convert.meals);

    Display(convert.meals);
    query.innerText=null
  } catch (error) {
    console.log("error:", error);
  }
};

const box = document.getElementById("container");

let Display = (DATA) => {
  box.innerHTML = null;

  if (DATA == null) {
    return false;
  }

  DATA.forEach(({ strMealThumb, strMeal, strCategory, strArea }) => {
    const div = document.createElement("div");

    const img = document.createElement("img");
    img.src = strMealThumb;

    const Meal_Name = document.createElement("h2");
    Meal_Name.innerText = strMeal;

    const Category = document.createElement("h3");
    Category.innerText = `Category:-${strCategory}`;

    const CountryName = document.createElement("h3");
    CountryName.innerText = `CountryName:-${strArea}`;

    div.append(img, Meal_Name, Category, CountryName);
    box.append(div);
  });
};

let id;

let Debounce = (func, delay) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    func();
  }, delay);
};

//Display Name and Remove Name

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
