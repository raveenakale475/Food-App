let Random = async () => {
  const Server = await fetch(
    `https://www.themealdb.com/api/json/v1/1/random.php`
  );

  const Convert = await Server.json();

  const meals = Convert.meals;
  console.log("meals:", meals);

  Display(meals);
};

const box = document.getElementById("container");

let Display = (DATA) => {
  box.innerHTML = null;

  if (DATA == null) {
    return false;
  }

  DATA.forEach(
    ({
      strMealThumb,
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strYoutube,
    }) => {
      const div = document.createElement("div");

      const img = document.createElement("img");
      img.src = strMealThumb;

      const div1 = document.createElement("div");

      const Meal_Name = document.createElement("h2");
      Meal_Name.innerText = `FoodName:-${strMeal}`;

      const Category = document.createElement("h3");
      Category.innerText = `Category:-${strCategory}`;

      const CountryName = document.createElement("h3");
      CountryName.innerText = `CountryName:-${strArea}`;

      const instruction = document.createElement("p");
      instruction.style.color = "grey";
      instruction.innerText = `Descripation:-${strInstructions}`;

      const YoTube = document.createElement("a");
      YoTube.href = ` ${strYoutube}`;
      YoTube.innerText = `for More Refrence:-${"YouTube"}`;
      YoTube.id = "YouTube";

      div1.append(Meal_Name, Category, CountryName, instruction, YoTube);

      div.append(img);
      box.append(div, div1);
    }
  );
};
