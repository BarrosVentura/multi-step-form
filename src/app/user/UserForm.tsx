"use client";

import { Input } from "@/components/Input";
import { User, userSchema } from "@/schemas/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(userSchema),
  });

  function handleNextStep(data: User) {
    console.log({ data });
  }
  return (
    <form
      className="flex flex-col justify-between flex-1"
      onSubmit={handleSubmit(handleNextStep)}
    >
      <div>
        <Input
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
        />
      </div>

      <button className="self-end bg-marine-blue text-light-gray py-3 px-5 rounded-lg hover:brightness-125 transition-all">
        Next Step
      </button>
    </form>
  );
}
