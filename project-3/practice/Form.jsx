export default function Form() {
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formEl = event.currentTarget;
  //   const formData = new FormData(formEl);
  //    use the name attribute
  //   const email = formData.get("email");

  //   console.log(email);
  //    resets form
  //   formEl.reset();
  // }

  function signUp(formData) {
    //use the name attribute to get value
    const email = formData.get("email");
    console.log(email);
    const password = formData.get("password");
    console.log(password);
    //in case of radios it  gets the data from value attribute
    const employmentStatus = formData.get("employment");
    console.log(employmentStatus);
    //getAll used since multiple checkboxes can be checked unlike radio input
    const dietaryPreferences = formData.getAll("diet");
    console.log(dietaryPreferences);
    const favouriteColor = formData.get("favColor");
    console.log(favouriteColor);

    //In case of many input fields in a form (say 10+),its cumbersome to get each value and store individually
    //Hence we store the object that stores all entries
    const formObj = Object.fromEntries(formData);
    console.log(formObj);

    //automatically resets form,no need for below
    // formEl.reset();
  }
  return (
    <section>
      // <h1>Signup form</h1>
      {/* a function passed to action does not get passed an event */}
      {/* <form action={signUp} onSubmit={handleSubmit} method="POST"> */}
      //{" "}
      <form action={signUp} method="POST">
        {/* To associate label with input ,either have input as child of label
         */}
        {/* <label>  Email:
        <input type="email" name="email"/>
      </label> */}

        {/*or use a htmlFor attribute whose value is the id of the associated input */}
        <label htmlFor="email"> Email:</label>
        {/* name property to get data from form */}
        <input
          id="email"
          type="email"
          name="email"
          defaultValue={"noone@yourmail.com"}
        />
        <br />
        <label htmlFor="password">Password: </label>

        <input
          type="password"
          id="password"
          name="password"
          defaultValue={"sameasemail"}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue={"This is a description"}
        ></textarea>

        <fieldset>
          <legend>Employment status</legend>
          <label>
            <input type="radio" name="employment" value="Employed" />
            Employed
          </label>
          <label>
            <input type="radio" name="employment" value="Part-time" />
            Part-time
          </label>
          <label>
            <input
              type="radio"
              name="employment"
              defaultChecked={true}
              value="Unemployed"
            />
            Unemployed
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary preferences</legend>
          <label>
            <input type="checkbox" name="diet" value="Vegetarian" />
            Vegetarian
          </label>
          <label>
            <input type="checkbox" name="diet" value="Vegan" />
            Vegan
          </label>
          <label>
            <input type="checkbox" name="diet" value="Non-vegetarian" />
            Non-vegetarian
          </label>
        </fieldset>

        <label htmlFor="favColor">
          <select id="favColor" name="favColor" defaultValue="">
            <option value="" disabled>
              --Choose a color--
            </option>
            <option value="Violet">Violet </option>
            <option value="Indigo">Indigo </option>
            <option value="Blue"> Blue </option>
            <option value="Green">Green </option>
            <option value="Yellow">Yellow </option>
            <option value="Orange">Orange </option>
            <option value="Red">Red </option>
          </select>
        </label>

        {/* <input type="submit" value={"submit"}/> */}
        {/* is equivalent to */}
        <button>submit</button>
      </form>
    </section>
  );
}
