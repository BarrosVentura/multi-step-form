"use client";

import { useFormProvider } from "../form-provider";
import { useRouter } from "next/navigation";

export default function AddonsPage() {
  const { formContent } = useFormProvider();
  const router = useRouter();

  function handleNextStep() {
    // handleFormContent({ ...data });
    // router.push("/summary");
  }

  function handleGoBack() {
    router.push("/plan");
  }

  return (
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
  );
}
