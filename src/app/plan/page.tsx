"use client";

import { Plan, planSchema } from "@/schemas/Plan";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useFormProvider } from "../form-provider";
import { SelectCard } from "@/components/SelectCard";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/Switch";
import { PLAN_PRICES } from "@/prices/plan";
import { ButtonContainer } from "@/components/ButtonContainer";
import { Button } from "@/components/Button";

export default function Plan() {
  const { handleFormContent, formContent } = useFormProvider();
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
      period: formContent.period ?? "monthly",
      plan: formContent.plan,
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
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
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
      <ButtonContainer>
        <button
          onClick={handleGoBack}
          className="text-cool-gray hover:text-marine-blue transition-all"
        >
          Go Back
        </button>
        <Button disabled={!isValid} type="submit">
          Next Step
        </Button>
      </ButtonContainer>
    </form>
  );
}
