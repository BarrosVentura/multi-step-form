"use client";

import Link from "next/link";
import { useFormProvider } from "../form-provider";
import { useRouter } from "next/navigation";

export default function SummaryPage() {
  const { addonsBasedOnPeriod, planBasedOnPeriod, totalPrice } =
    useFormProvider();
  const router = useRouter();

  function handleConfirm() {
    router.push("/thankyou");
  }

  function handleGoBack() {
    router.push("/addons");
  }

  return (
    <div className="flex-1 flex flex-col justify-between items-center">
      <div className="w-full">
        <div className="flex flex-col bg-magnolia rounded-md p-6">
          <div className="flex justify-between items-center border-b pb-4 mb-4 border-light-gray">
            <div>
              <h3 className="text-marine-blue font-medium capitalize">
                {planBasedOnPeriod.title}
              </h3>
              <Link
                href="/plan"
                className="cursor-pointer text-sm underline text-cool-gray hover:text-purplish-blue transition-colors"
              >
                Change
              </Link>
            </div>
            <span className="text-marine-blue font-bold ">
              {planBasedOnPeriod.price}
            </span>
          </div>
          <ul className="flex flex-col gap-3">
            {addonsBasedOnPeriod.map((addon) => (
              <li
                key={addon.title}
                className="flex justify-between items-center"
              >
                <p className="text-sm text-cool-gray">{addon.title}</p>
                <span className="text-sm text-marine-blue">{addon.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 flex justify-between">
          <p className="text-cool-gray text-sm">{totalPrice.title}</p>
          <span className="text-lg text-purplish-blue font-bold">
            {totalPrice.price}
          </span>
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
          className="bg-purplish-blue text-light-gray py-3 px-5 rounded-lg hover:opacity-40 transition-all disabled:bg-cool-gray disabled:text-alabaster"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
