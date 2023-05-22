"use client";

import { Plan, planSchema } from "@/schemas/Plan";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormProvider } from "../form-provider";
import IconArcade from "../../../public/images/icon-arcade.svg";
import IconAdvanced from "../../../public/images/icon-advanced.svg";
import IconPro from "../../../public/images/icon-pro.svg";
import Image from "next/image";
import { SelectCard } from "@/components/SelectCard";

export function PlanForm() {
  const { handleFormContent } = useFormProvider();

  const { register, handleSubmit, formState } = useForm<Plan>({
    resolver: zodResolver(planSchema),
  });

  function handleNextStep(data: Plan) {
    console.log({ data });
    // handleFormContent({ active: 2, ...data });
  }
  console.log(formState);
  return (
    <form
      className="flex flex-col justify-between flex-1"
      onSubmit={handleSubmit(handleNextStep)}
    >
      <div>
        <div className="grid grid-cols-3 gap-4">
          <SelectCard
            register={register("plan")}
            icon={IconArcade}
            id="arcade"
            price="$9/mo"
            title="Arcade"
          />
          <SelectCard
            register={register("plan")}
            icon={IconAdvanced}
            id="advanced"
            price="$12/mo"
            title="Advanced"
          />
          <SelectCard
            register={register("plan")}
            icon={IconPro}
            id="pro"
            price="$15/mo"
            title="Pro"
          />
        </div>

        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Toggle me
          </span>
        </label>
      </div>

      <button className="self-end bg-marine-blue text-light-gray py-3 px-5 rounded-lg hover:brightness-125 transition-all">
        Next Step
      </button>
    </form>
  );
}
