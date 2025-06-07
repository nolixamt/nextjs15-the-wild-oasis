import React from "react";
import SideNavigation from "@/app/_components/side-navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"grid grid-cols-[200px_1fr] gap-x-8 h-full"}>
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}
