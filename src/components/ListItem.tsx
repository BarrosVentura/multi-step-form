"use client";

import { useFormProvider } from "@/app/form-provider";

interface ListItemProps {
  order: number;
  title: string;
}

export function ListItem({ order, title }: ListItemProps) {
  const { formContent } = useFormProvider();

  const isActive =
    formContent.active === order
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
      <div>
        <span className="font-light uppercase text-xs text-cool-gray">
          step {order}
        </span>
        <h2 className="font-medium uppercase text-sm text-white">{title}</h2>
      </div>
    </li>
  );
}
