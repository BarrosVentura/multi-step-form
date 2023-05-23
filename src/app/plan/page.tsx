"use client";

import { Plan, planSchema } from "@/schemas/Plan";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useFormProvider } from "../form-provider";
import { SelectCard } from "@/components/SelectCard";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/Switch";
import { PLAN_PRICES } from "@/prices/plan";

export default function Plan() {
  const { handleFormContent } = useFormProvider();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isValid },
    watch,
    control,
  } = useForm<Plan>({
    resolver: zodResolver(planSchema),
    defaultValues: {
      period: "monthly",
    },
  });

  const currentPeriodState = watch("period");

  function handleNextStep(data: Plan) {
    handleFormContent({ ...data });
    router.push("/addons");
  }

  function handleGoBack() {
    router.push("/user");
  }

  return (
    <form
      className="flex flex-col justify-between flex-1"
      onSubmit={handleSubmit(handleNextStep)}
    >
      <div>
        <div className="grid grid-cols-3 gap-4">
          {PLAN_PRICES.map(({ name, icon, monthly, yearly }) => (
            <SelectCard
              key={name}
              register={register("plan")}
              icon={icon}
              id={name}
              price={`$${
                currentPeriodState === "monthly"
                  ? monthly + "/mo"
                  : yearly + "/yr"
              }`}
              title={name}
              showDiscount={currentPeriodState === "yearly"}
            />
          ))}
        </div>

        <Controller
          control={control}
          name="period"
          render={({ field }) => (
            <Switch value={field.value} onChange={field.onChange} />
          )}
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={handleGoBack}
          className="text-cool-gray hover:text-marine-blue transition-all"
        >
          Go Back
        </button>

        <button
          type="submit"
          disabled={!isValid}
          className="bg-marine-blue text-light-gray py-3 px-5 rounded-lg hover:brightness-125 transition-all disabled:bg-cool-gray disabled:text-alabaster"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
