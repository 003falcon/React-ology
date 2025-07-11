import ReactMarkdown from "react-markdown";
export default function ClaudeRecipe(props) {
  console.log(typeof props.recipe);
  return (
    <section className="suggested-recipe-container">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
