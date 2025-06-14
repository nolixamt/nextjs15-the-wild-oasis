import React from "react";

export default function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className={"text-4xl mb-5 text-accent-400 font-medium"}>{children}</h1>
  );
}
