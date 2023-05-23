"use client";

import { useSelectedLayoutSegment } from "next/navigation";

interface ListItemProps {
  id: string;
  order: number;
  title: string;
}

export function ListItem({ order, title, id }: ListItemProps) {
  const layout = useSelectedLayoutSegment();

  const isActive =
    id === layout
      ? "bg-light-blue border-light-blue"
      : "text-white border-white";
  return (
    <li className="flex gap-5 items-center">
      <div>
        <span
          className={`rounded-full border ${isActive} py-2 px-3 leading-4  `}
        >
          {order}
        </span>
      </div>
      <div className="hidden lg:block">
        <span className="font-light uppercase text-xs text-cool-gray">
          step {order}
        </span>
        <h2 className="font-medium uppercase text-sm text-white">{title}</h2>
      </div>
    </li>
  );
}
