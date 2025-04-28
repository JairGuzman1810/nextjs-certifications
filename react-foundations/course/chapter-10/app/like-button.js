"use client"; // Enables client-side rendering

import { useState } from "react";

// LikeButton - Define a component that displays a Like button
export default function LikeButton() {
  // Initialize a state variable 'likes' with an initial value of 0
  const [likes, setLikes] = useState(0);

  // handleClick - Increment the 'likes' state when button is clicked
  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    // Render a Like button that displays the current number of likes
    <button onClick={handleClick}>Like({likes})</button>
  );
}
