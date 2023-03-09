import React, { useState } from "react";
import props from "./LikePhoto";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    console.log(`User ${props.userId} liked photo ${props.photoId}`);
  };

  const buttonStyle = {
    backgroundColor: liked ? "salmon" : "skyblue",
    color: "white",
    borderRadius: "8px",
    padding: "8px 16px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {liked ? "Love-it!!:}" : "Like this image"}
    </button>
  );
}

export default LikeButton;
