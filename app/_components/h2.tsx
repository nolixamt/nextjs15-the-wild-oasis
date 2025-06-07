import React from "react";

export default function H2({ children }: { children: React.ReactNode }) {
  return <h2 className={"text-accent-400 mb-4 text-xl"}>{children}</h2>;
}
