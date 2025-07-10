import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../hf";
export default function Main() {
  // const ingredients = ["chicken", "mutton", "onion"];
  let [currentIngredients, setCurrentIngredients] = React.useState([]);
  const ingredientsItems = currentIngredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  // let [recipeShown, setRecipeShown] = React.useState(false);
  let [recipe, setRecipe] = React.useState(false);
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

  function getRecipe() {
    // setRecipeShown(prevRecipeShown=>!prevRecipeShown);
    const recipeMarkdown = getRecipeFromMistral(currentIngredients);
    setRecipe(recipeMarkdown);
  }
  return (
    <main>
      {/* <form onSubmit={handleSubmit} className="add-ingredient-form"> */}
      <form
        action={addIngredient}
        // onSubmit={(event) => {
        //   event.preventDefault();
        //   addIngredient(new FormData(event.currentTarget));
        // }}
        className="add-ingredient-form"
      >
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
        <IngredientsList
          ingredientsItems={ingredientsItems}
          length={currentIngredients.length}
          toggle={getRecipe}
        />
      ) : null}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
