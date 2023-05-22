import { UseFormRegisterReturn } from "react-hook-form";

interface CheckboxProps {
  id: "online" | "storage" | "custom";
  title: string;
  paragraph: string;
  register: UseFormRegisterReturn;
  price: string;
}

export function Checkbox({
  register,
  title,
  paragraph,
  price,
  id,
}: CheckboxProps) {
  const peerStateVariants = {
    online: {
      peer: "peer/online",
      label:
        "peer-checked/online:border-purplish-blue peer-checked/online:bg-magnolia",
      before:
        "peer-checked/online:before:bg-purplish-blue peer-checked/online:before:border-purplish-blue peer-checked/online:before:text-white",
    },
    storage: {
      peer: "peer/storage",
      label:
        "peer-checked/storage:border-purplish-blue peer-checked/storage:bg-magnolia",
      before:
        "peer-checked/storage:before:bg-purplish-blue peer-checked/storage:before:border-purplish-blue peer-checked/storage:before:text-white",
    },
    custom: {
      peer: "peer/custom",
      label:
        "peer-checked/custom:border-purplish-blue peer-checked/custom:bg-magnolia",
      before:
        "peer-checked/custom:before:bg-purplish-blue peer-checked/custom:before:border-purplish-blue peer-checked/custom:before:text-white",
    },
  };
  const labelClasses =
    "flex items-center gap-4 border border-light-gray rounded-md  p-4  hover:border-purplish-blue cursor-pointer before:content-[attr(data-icon)] before:text-sm before:px-1  before:border before:rounded before:text-transparent transition-all";

  return (
    <>
      <input
        {...register}
        type="checkbox"
        value={id}
        id={id}
        className={`${peerStateVariants[id].peer} sr-only `}
      />
      <label
        htmlFor={id}
        data-icon="&#x2713;"
        className={`${labelClasses} ${peerStateVariants[id].label} ${peerStateVariants[id].before}`}
      >
        <div className="flex-1 flex justify-between items-center">
          <div>
            <h3 className="text-marine-blue font-medium">{title}</h3>
            <p className="text-cool-gray text-sm">{paragraph}</p>
          </div>
          <span className="text-sm text-purplish-blue">{price}</span>
        </div>
      </label>
    </>
  );
}
