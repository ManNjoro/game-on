import { useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

const ExapandableText = ({ maxChars = 20, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}
      {!isExpanded && "..."}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExapandableText;
