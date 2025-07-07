import React from "react";

export default function Main() {
  // const ingredients = ["chicken", "mutton", "onion"];
  let [currentIngredients, setCurrentIngredients] = React.useState([]);
  const ingredientsItems = currentIngredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const newIngredient = formData.get("ingredient");
  //after
  // setCurrentIngredients((prevIngredients) => [
  //   ...prevIngredients,
  //   newIngredient,
  // ]);
  // console.log(newIngredient);
  //before
  // ingredients.push(newIngredient)
  // console.log(ingredients);
  // console.log("Form submitted");

  //Props vs State

  //props are immutable with its values not changed in the component
  //states are mutable within the component and are used when temp/local variables used in the component are
  //to be saved or displayed
  // }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);
    if (newIngredient != "") {
      setCurrentIngredients((prevIngredients) => [
        ...prevIngredients,
        newIngredient,
      ]);
    } else alert("Enter ingredient :)");
  }
  return (
    <main>
      {/* <form onSubmit={handleSubmit} className="add-ingredient-form"> */}
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. chili powder"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {/* <ul>{ingredientsItems}</ul> */}
      {currentIngredients.length ? (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsItems}
          </ul>
          {currentIngredients.length > 4 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button>Get a recipe</button>
            </div>
          )}
        </section>
      ) : null}
    </main>
  );
}
