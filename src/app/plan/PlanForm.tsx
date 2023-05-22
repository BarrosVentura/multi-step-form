"use client";

import { Plan, planSchema } from "@/schemas/Plan";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useFormProvider } from "../form-provider";
import IconArcade from "../../../public/images/icon-arcade.svg";
import IconAdvanced from "../../../public/images/icon-advanced.svg";
import IconPro from "../../../public/images/icon-pro.svg";
import { SelectCard } from "@/components/SelectCard";

export function PlanForm() {
  const { handleFormContent } = useFormProvider();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Plan>({
    resolver: zodResolver(planSchema),
    defaultValues: {
      period: "monthly",
    },
  });

  function handleNextStep(data: Plan) {
    console.log({ data });
    // handleFormContent({ active: 2, ...data });
  }
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

        <Controller
          control={control}
          name="period"
          render={({ field }) => {
            return (
              <div className="w-full bg-magnolia mt-6 p-3 flex justify-center items-center gap-5 rounded-md">
                <span
                  className={`text-sm font-medium text-cool-gray ${
                    field.value === "monthly" && "text-marine-blue"
                  } `}
                >
                  Monthly
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value={field.value}
                    className="sr-only peer"
                    onChange={({ target }) => {
                      if (target.checked) {
                        field.onChange({
                          target: {
                            value: "yearly",
                          },
                        });
                      } else {
                        field.onChange({
                          target: {
                            value: "monthly",
                          },
                        });
                      }
                    }}
                  />
                  <div className="w-9 h-5 bg-marine-blue peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[4px] after:left-[5px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                </label>
                <span
                  className={`text-sm font-medium text-cool-gray ${
                    field.value === "yearly" && "text-marine-blue"
                  } `}
                >
                  Yearly
                </span>
              </div>
            );
          }}
        />
      </div>

      <button className="self-end bg-marine-blue text-light-gray py-3 px-5 rounded-lg hover:brightness-125 transition-all">
        Next Step
      </button>
    </form>
  );
}
