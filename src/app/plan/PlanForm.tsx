"use client";

import { Plan, planSchema } from "@/schemas/Plan";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useFormProvider } from "../form-provider";
import IconArcade from "../../../public/images/icon-arcade.svg";
import IconAdvanced from "../../../public/images/icon-advanced.svg";
import IconPro from "../../../public/images/icon-pro.svg";
import { SelectCard } from "@/components/SelectCard";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/Switch";

export function PlanForm() {
  const { handleFormContent } = useFormProvider();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isValid },
    control,
  } = useForm<Plan>({
    resolver: zodResolver(planSchema),
    defaultValues: {
      period: "monthly",
    },
  });

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
