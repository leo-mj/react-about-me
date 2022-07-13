import { capitalise } from "../utils/capitalise";

function MainContent(): JSX.Element {
  const location = {
    city: "Oxford",
    country: "England",
  };

  const numOne = 3;
  const numTwo = 6;

  const threeFavouriteFoods = ["Dumplings","Chocolate", "Noodles", "Pizza"];

  const noun: string = "vis";
  const verb: string = "count";
  const sentenceStructure = ` ${noun}${verb} could ${verb} ${noun}`;

  return (
    <main>
      <section>
        <h2>About Me</h2>
        <p>Hi! My name is Nichard Rg.</p>
        <p>
          I currently live in {location.city}, {location.country}.
        </p>
      </section>
      <section>
        <h2>Musing of the month ({location.city}, March 2003)</h2>
        <p>
          Q: How many {noun} could a {noun}{verb} {verb} if a {sentenceStructure}?
        </p>
        <p>
          A: A {noun}{verb} would {verb} all the {noun} they could {verb} if a 
           {sentenceStructure}.
        </p>
      </section>
      <section>
        <h2>Numbers</h2>
        <p>
          Currently, my two favourite numbers are <b>{numOne}</b> and{" "}
          <b>{numTwo}</b>.
        </p>
        <p>Here's how they interact:</p>
        <ol>
          <li>
            Sum, {numOne} + {numTwo} = {numOne + numTwo}
          </li>
          <li>
            Product, {numOne} x {numTwo} = {numOne * numTwo}
          </li>
          <li>
            Division (a), {numOne} / {numTwo} = {numOne / numTwo}
          </li>
          <li>
            Division (b), {numTwo} / {numOne} = {numTwo / numOne}
          </li>
        </ol>
      </section>
      <section>
        <h2>Food</h2>
        <p>My favourite foods are:</p>
        <ul>
          <li>{capitalise(threeFavouriteFoods[Math.floor(Math.random())])}</li>
          <li>{capitalise(threeFavouriteFoods[2])}</li>
          <li>{capitalise(threeFavouriteFoods[3])}</li>
        </ul>
        <p>
          Please get in touch if you know any good recipes that combine{" "}
          {threeFavouriteFoods[0]}, {threeFavouriteFoods[1]} and{" "}
          {threeFavouriteFoods[2]}!
        </p>
      </section>
    </main>
  );
}

export default MainContent;
