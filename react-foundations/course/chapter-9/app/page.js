import { useState } from "react";

// Header - Define a component that displays an H1 element
// Displays a custom title if provided, otherwise falls back to a default title
function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

// HomePage - Define a component that nests Header, displays a list, and a Like button
export default function HomePage() {
  // Initialize a state variable 'likes' with an initial value of 0
  const [likes, setLikes] = useState(0);

  // Define an array of names
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  // handleClick - Increment the 'likes' state when button is clicked
  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      {/* Render the Header component with a custom title */}
      <Header title="Develop. Preview. Ship." />

      {/* Render a list of names */}
      <ul>
        {names.map((name) => (
          // Each list item must have a unique 'key' prop
          <li key={name}>{name}</li>
        ))}
      </ul>

      {/* Render a Like button that displays the current number of likes */}
      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}
