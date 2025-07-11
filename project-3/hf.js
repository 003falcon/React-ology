import { InferenceClient } from "@huggingface/inference";

//Note env file must be kept at root of current project directory
const client = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);
// const cuisine="Indian";

export async function getRecipeFromMistral(ingredientsArr,cuisine) {
  const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe of ${cuisine} cuisine they could make with some or all of those ingredients.You don't need to use every ingredient they mention in their recipe. The recipe can include additional ingredients they didn't mention,but try not to include too many extra ingredients.The recipe must be of the mentioned cuisine.Format your response in markdown to make it easier to render to a webpage`;
  const ingredientsString = ingredientsArr.join(",");
  try {
    const response = await client.chatCompletion({
      provider: "novita",
      model: "mistralai/Mistral-7B-Instruct-v0.3",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make with them!`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.log(err.message);
  }
}
