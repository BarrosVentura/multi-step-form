import Image from "next/image";
import { UseFormRegisterReturn } from "react-hook-form";

interface SelectCardProps {
  title: string;
  id: "arcade" | "advanced" | "pro";
  register: UseFormRegisterReturn;
  icon: string;
  price: string;
}

export function SelectCard({
  title,
  id,
  register,
  icon,
  price,
}: SelectCardProps) {
  const peerStateVariants = {
    arcade: {
      peer: "peer/arcade",
      border: "peer-checked/arcade:border-marine-blue",
      background: "peer-checked/arcade:bg-alabaster",
    },
    advanced: {
      peer: "peer/advanced",
      border: "peer-checked/advanced:border-marine-blue",
      background: "peer-checked/advanced:bg-alabaster",
    },
    pro: {
      peer: "peer/pro",
      border: "peer-checked/pro:border-marine-blue",
      background: "peer-checked/pro:bg-alabaster",
    },
  };
  return (
    <>
      <input
        {...register}
        type="radio"
        value={id}
        id={id}
        className={`sr-only ${peerStateVariants[id].peer}`}
      />
      <label
        htmlFor={id}
        className={`border border-light-gray rounded-md p-3 ${peerStateVariants[id].border} ${peerStateVariants[id].background} cursor-pointer hover:border-marine-blue transition-colors`}
      >
        <Image src={icon} alt="" />
        <p className="mt-8 text-marine-blue font-medium">{title}</p>
        <span className="text-cool-gray text-sm">{price}</span>
      </label>
    </>
  );
}