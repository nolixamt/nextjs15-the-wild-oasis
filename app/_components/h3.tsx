import React from "react";

export default function H3({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={"text-accent-500 mb-3 text-2xl font-semibold"}>
      {children}
    </h2>
  );
}
