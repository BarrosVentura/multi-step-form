"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ListItem } from "./ListItem";

export function Sidebar() {
  const layout = useSelectedLayoutSegment();
  const showList = layout !== "thankyou";
  return (
    <aside
      className={`lg:bg-desktop-pattern bg-mobile-pattern bg-cover bg-no-repeat bg-center h-full lg:rounded-lg lg:pl-8 lg:pt-8 lg:pb-0 pb-16 lg:block flex justify-center`}
    >
      {showList && (
        <ul className="flex lg:flex-col gap-6">
          <ListItem order={1} id={"user"} title="your info" />
          <ListItem order={2} id={"plan"} title="select plan" />
          <ListItem order={3} id={"addons"} title="add-ons" />
          <ListItem order={4} id={"summary"} title="summary" />
        </ul>
      )}
    </aside>
  );
}
