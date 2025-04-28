import LikeButton from "./like-button";

// Header - Define a component that displays an H1 element
// Displays a custom title if provided, otherwise falls back to a default title
function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

// HomePage - Define a component that nests Header, displays a list, and a Like button
export default function HomePage() {
  // Define an array of names
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

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
      {/* Render the LikeButton component */}
      <LikeButton />
    </div>
  );
}
