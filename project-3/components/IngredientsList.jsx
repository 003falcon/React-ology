export default function IngredientsList(props)
{
  
  return <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {props.ingredientsItems}
          </ul>
          {props.length > 3 && (
            <div className="get-recipe-container">
              <div ref={props.ref}>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={props.toggle}>Get a recipe</button>
            </div>
          )}
        </section>;
}