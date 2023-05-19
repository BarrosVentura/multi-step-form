"use client";

import { Input } from "@/components/Input";
import { Plan, planSchema } from "@/schemas/Plan";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormProvider } from "../form-provider";

export function PlanForm() {
  const { handleFormContent } = useFormProvider();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Plan>({
    resolver: zodResolver(planSchema),
  });

  function handleNextStep(data: Plan) {
    console.log({ data });
    handleFormContent({ active: 2, ...data });
  }
  return (
    <form
      className="flex flex-col justify-between flex-1"
      onSubmit={handleSubmit(handleNextStep)}
    >
      <div>
        {/* <Input
          register={register("name")}
          id="name"
          title="Name"
          type="text"
          error={errors.name}
          placeholder="e.g. Stephen King"
        />

        <Input
          register={register("email")}
          id="email"
          title="Email Address"
          type="email"
          error={errors.email}
          placeholder="e.g. stephenking@lorem.com"
        />

        <Input
          register={register("phone")}
          id="phone"
          title="Phone Number"
          type="tel"
          error={errors.phone}
          placeholder="e.g. +1 234 567 890"
        /> */}
      </div>

      <button className="self-end bg-marine-blue text-light-gray py-3 px-5 rounded-lg hover:brightness-125 transition-all">
        Next Step
      </button>
    </form>
  );
}
