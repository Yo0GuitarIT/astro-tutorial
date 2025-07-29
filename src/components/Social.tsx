import React from "react";

interface SocialProps {
  platform: string;
  username: string;
}

const Social: React.FC<SocialProps> = ({ platform, username }) => {
  const socialStyle: React.CSSProperties = {
    padding: "0.5rem 1rem",
    color: "white",
    backgroundColor: "#4c1d95",
    textDecoration: "none",
  };

  return (
    <a href={`https://www.${platform}.com/${username}`} style={socialStyle}>
      {platform}
    </a>
  );
};

export default Social;
