import React from "react";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className={"px-8 py-12"}>
      <main className={"max-w-7xl mx-auto"}>{children}</main>
    </div>
  );
}
