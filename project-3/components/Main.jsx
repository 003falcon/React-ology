import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../hf";

const placeholderOptions = [
  // const ingredients = ["chicken", "mutton", "onion"];
  "e.g. chili powder",
  "e.g. garlic cloves",
  "e.g. leftover rice",
  "e.g. canned beans",
  "e.g. spinach leaves",
  "e.g. parmesan cheese",
];
export default function Main() {
  const [placeholder, setPlaceholder] = React.useState(placeholderOptions[0]);
  const [optionIndex, setOptionIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);

  const [currentIngredients, setCurrentIngredients] = React.useState([]);

  const ingredientsItems = currentIngredients.map((ingredient, index) => (
    <li key={index}>
      {ingredient}
      <button
        className="remove-btn"
        onClick={() => removeIngredient(ingredient)}
      >
        ❌
      </button>
    </li>
  ));

  const [recipeShown, setRecipeShown] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [recipe, setRecipe] = React.useState("");
  const [cuisine, setCuisine] = React.useState("Indian");

  //Refs are similiar to state ,the difference being that the former is mutable as well as doesn't cause a re-render upon being modified

  //For DOM nodes,value is null.
  const recipeSection=React.useRef(null);

  React.useEffect(() => {
  if (recipe!="" && recipeSection.current!=null) {
    //doesn't work in iFrames-works for Edge browser
    // recipeSection.current.scrollIntoView({ behavior: "smooth" });
    
    //works in iFrames
    const yCoord=recipeSection.current.getBoundingClientRect().top;
    window.scroll({
      top:yCoord,
      behavior:'smooth'
    })
  }
}, [recipe]);

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


  React.useEffect(() => {
    const currentOption = placeholderOptions[optionIndex];

    if (charIndex <= currentOption.length) {
      const timeout = setTimeout(() => {
        setPlaceholder(currentOption.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100); // typing speed

      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setCharIndex(0);
        setOptionIndex((prev) => (prev + 1) % placeholderOptions.length);
      }, 2000); // wait 2s before switching to next option

      return () => clearTimeout(delay);
    }
  }, [charIndex, optionIndex]);

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

  function removeIngredient(ingredientToRemove) {
    setCurrentIngredients((prevIngredients) =>
      prevIngredients.filter((ing) => ing !== ingredientToRemove)
    );
  }

  async function getRecipe() {
    // setRecipeShown(prevRecipeShown=>!prevRecipeShown);
    try {
      setIsLoading(true);
      const recipeMarkdown = await getRecipeFromMistral(
        currentIngredients,
        cuisine
      );
      setRecipeShown(true);
      setRecipe(recipeMarkdown);
    } catch (err) {
      console.log("failed to fetch response", err);
    } finally {
      setIsLoading(false);
    }
    // getRecipeFromMistral(currentIngredients);
    // console.log(recipeMarkdown);
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
          // placeholder="e.g. chili powder"
          placeholder={placeholder}
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          name="cuisine"
          style={{ marginLeft: "10px", padding: "4px" }}
        >
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="English">English</option>
          <option value="Chinese">Chinese</option>
          <option value="Mexican">Mexican</option>
          <option value="French">French</option>
          <option value="Japanese">Japanese</option>
          <option value="Thai">Thai</option>
        </select>
      </form>
      {/* <ul>{ingredientsItems}</ul> */}
      {currentIngredients.length ? (
        <IngredientsList
          ingredientsItems={ingredientsItems}
          length={currentIngredients.length}
          toggle={getRecipe}
          ref={recipeSection}
        />
      ) : null}
      {isLoading && (
        <div className="bouncing-dots">
          <div>Loading</div>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      )}
      {/* {isLoading && <div className="spinner">Loading recipe...</div>} */}
      {!isLoading && recipeShown && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
