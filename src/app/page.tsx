"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/Input";
import { User, userSchema } from "@/schemas/User";

export default function Home() {
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
    <main className="pt-8 flex flex-col pr-12">
      <h1 className="text-3xl font-medium text-marine-blue mb-2">
        Personal info
      </h1>
      <p className="text-cool-gray text-sm mb-4">
        Please provide your name, email address and phone number.
      </p>
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
    </main>
  );
}
