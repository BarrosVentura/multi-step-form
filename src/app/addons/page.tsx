"use client";

import { Addons, addonsSchema } from "@/schemas/Addons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormProvider } from "../form-provider";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/Checkbox";
import { ADDONS_PRICES } from "@/prices/addons";
import { ButtonContainer } from "@/components/ButtonContainer";
import { Button } from "@/components/Button";

export default function AddonsPage() {
  const { handleFormContent, formContent } = useFormProvider();
  const router = useRouter();

  const { register, handleSubmit } = useForm<Addons>({
    resolver: zodResolver(addonsSchema),
    defaultValues: {
      addons: formContent.addons,
    },
  });

  const isYearly = formContent?.period === "yearly";

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
        {ADDONS_PRICES.map(({ monthly, name, yearly, paragraph, title }) => (
          <Checkbox
            key={name}
            id={name}
            title={title}
            paragraph={paragraph}
            price={`+$${isYearly ? yearly + "/yr" : monthly + "/mo"}`}
            register={register("addons")}
          />
        ))}
      </div>

      <ButtonContainer>
        <button
          onClick={handleGoBack}
          className="text-cool-gray hover:text-marine-blue transition-all"
        >
          Go Back
        </button>

        <Button type="submit">Next Step</Button>
      </ButtonContainer>
    </form>
  );
}
