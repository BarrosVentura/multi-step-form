"use client";

import { Addons, addonsSchema } from "@/schemas/Addons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormProvider } from "../form-provider";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/Checkbox";

export default function AddonsPage() {
  const { handleFormContent } = useFormProvider();
  const router = useRouter();

  const { register, handleSubmit } = useForm<Addons>({
    resolver: zodResolver(addonsSchema),
  });

  function handleNextStep(data: Addons) {
    handleFormContent({ ...data });
    router.push("/summary");
  }

  function handleGoBack() {
    router.push("/plan");
  }

  return (
    <form
      className="flex flex-col justify-between flex-1"
      onSubmit={handleSubmit(handleNextStep)}
    >
      <div className="flex flex-col gap-4">
        <Checkbox
          id="online"
          title="Online service"
          paragraph="Access to multiplayer games"
          price="+$1/mo"
          register={register("addons")}
        />
        <Checkbox
          id="storage"
          title="Larger storage"
          paragraph="Extra 1TB of cloud save"
          price="+$2/mo"
          register={register("addons")}
        />
        <Checkbox
          id="custom"
          title="Customizable profile"
          paragraph="Custom theme on your profile"
          price="+$2/mo"
          register={register("addons")}
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
          className="bg-marine-blue text-light-gray py-3 px-5 rounded-lg hover:brightness-125 transition-all disabled:bg-cool-gray disabled:text-alabaster"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
