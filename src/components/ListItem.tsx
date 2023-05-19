interface ListItemProps {
  active?: boolean;
  order: number;
  title: string;
}

export function ListItem({ active, order, title }: ListItemProps) {
  const isActive = active ? "bg-light-blue" : "text-white border border-white";
  return (
    <li className="flex gap-5 items-center">
      <div>
        <span className={`rounded-full ${isActive} py-2 px-3 leading-4  `}>
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
