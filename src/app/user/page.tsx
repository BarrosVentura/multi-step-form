"use client";

import { Input } from "@/components/Input";
import { User, userSchema } from "@/schemas/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormProvider } from "../form-provider";
import { useRouter } from "next/navigation";

export default function User() {
  const { handleFormContent, formContent } = useFormProvider();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: formContent.email,
      name: formContent.name,
      phone: formContent.phone,
    },
  });

  function handleNextStep(data: User) {
    handleFormContent({ ...data });
    router.push("/plan");
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
          register={register("phone", {
            valueAsNumber: true,
          })}
          id="phone"
          title="Phone Number"
          type="tel"
          error={errors.phone}
          placeholder="e.g. +1 234 567 890"
        />
      </div>

      <div className="md:static md:bg-transparent md:p-0 md:border-transparent absolute bottom-0 left-0 bg-white w-full p-6 flex justify-end border-t ">
        <button className=" bg-marine-blue text-light-gray py-3 px-5 rounded-md hover:brightness-125 transition-all">
          Next Step
        </button>
      </div>
    </form>
  );
}
