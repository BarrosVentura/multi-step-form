"use client";

import Link from "next/link";
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
    <div className="flex-1 flex flex-col justify-between items-center">
      <div className="w-full">
        <div className="flex flex-col bg-magnolia rounded-md p-6">
          <div className="flex justify-between items-center border-b pb-4 mb-4 border-light-gray">
            <div>
              <h3 className="text-marine-blue font-medium">Arcade (Monthly)</h3>
              <Link
                href="/plan"
                className="cursor-pointer text-sm underline text-cool-gray hover:text-purplish-blue transition-colors"
              >
                Change
              </Link>
            </div>
            <span className="text-marine-blue font-bold ">$9/mo</span>
          </div>
          <ul className="flex flex-col gap-3">
            <li className="flex justify-between items-center">
              <p className="text-sm text-cool-gray">Online service</p>
              <span className="text-sm text-marine-blue">+$1/mo</span>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-sm text-cool-gray">Larger storage</p>
              <span className="text-sm text-marine-blue">+$2/mo</span>
            </li>
          </ul>
        </div>
        <div className="p-6 flex justify-between">
          <p className="text-cool-gray text-sm">Total (per month)</p>
          <span className="text-lg text-purplish-blue font-bold">+$12/mo</span>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <button
          onClick={handleGoBack}
          className="text-cool-gray hover:text-marine-blue transition-all"
        >
          Go Back
        </button>

        <button
          type="submit"
          className="bg-purplish-blue text-light-gray py-3 px-5 rounded-lg hover:opacity-40 transition-all disabled:bg-cool-gray disabled:text-alabaster"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
