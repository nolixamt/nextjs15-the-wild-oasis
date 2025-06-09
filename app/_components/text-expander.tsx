"use client";

import React, { useState } from "react";

type TextExpanderProps = {
  text: string;
};

export default function TextExpander({ text }: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? text
    : text?.split(" ").slice(0, 30).join(" ") + "...  ";

  return (
    <>
      <span>{displayText}</span>
      <button
        className={"underline text-primary-600 leading-3 cursor-pointer"}
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </>
  );
}
