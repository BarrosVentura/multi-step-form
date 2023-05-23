"use client";

import { ADDONS_PRICES } from "@/prices/addons";
import { PLAN_PRICES } from "@/prices/plan";
import { ROUTES } from "@/routes/routes";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface FormProviderProps {
  children: React.ReactNode;
}

interface FormContent {
  active?: number;
  name?: string;
  email?: string;
  phone?: number;
  plan?: "arcade" | "advanced" | "pro";
  period?: "yearly" | "monthly";
  addons?: ("online" | "storage" | "custom")[] | null;
}

interface FormProviderContext {
  formContent: FormContent;
  handleFormContent: (data: FormContent) => void;
  planBasedOnPeriod: {
    title: string;
    price: string;
  };
  addonsBasedOnPeriod: {
    title: string;
    price: string;
  }[];
  totalPrice: {
    title: string;
    price: string;
  };
}

export const FormContext = createContext({} as FormProviderContext);

export function FormProvider({ children }: FormProviderProps) {
  const [formContent, setFormContent] = useState<FormContent>({
    active: 1,
  });
  const pathname = usePathname();
  const isYearly = formContent?.period === "yearly";
  const selectedPlan = PLAN_PRICES.find(
    (plan) => plan.name === formContent?.plan
  );
  const selectedAddons = ADDONS_PRICES.filter((addon) =>
    formContent?.addons?.includes(addon.name)
  );
  const condensedAddons = selectedAddons.reduce(
    (prev, curr) => {
      const result = {
        monthly: prev.monthly + curr.monthly,
        yearly: prev.yearly + curr.yearly,
      };
      return result;
    },
    {
      monthly: 0,
      yearly: 0,
    }
  );

  function getTotal() {
    if (selectedPlan) {
      const total = isYearly
        ? selectedPlan?.yearly + condensedAddons.yearly
        : selectedPlan.monthly + condensedAddons.monthly;
      return total;
    }
    return 0;
  }

  const planBasedOnPeriod = {
    title: `${selectedPlan?.name} (${formContent.period})`,
    price: `$${
      isYearly ? selectedPlan?.yearly + "/yr" : selectedPlan?.monthly + "/mo"
    }`,
  };
  const addonsBasedOnPeriod = selectedAddons.map((addon) => {
    const price = `+$${
      isYearly ? addon.yearly + "/yr" : addon.monthly + "/mo"
    }`;

    return {
      title: addon.title,
      price,
    };
  });

  const totalPrice = {
    title: `Total (per ${isYearly ? "year" : "month"})`,
    price: `$${getTotal()}/${isYearly ? "yr" : "mo"}`,
  };

  function handleFormContent(data: FormContent) {
    setFormContent((state) => ({ ...state, ...data }));
  }

  useEffect(() => {
    const currentPath = ROUTES.findIndex((route) =>
      pathname.startsWith(`/${route}`)
    );

    if (currentPath > -1) {
      handleFormContent({ active: currentPath + 1 });
    }
  }, [pathname]);

  return (
    <FormContext.Provider
      value={{
        formContent,
        handleFormContent,
        planBasedOnPeriod,
        addonsBasedOnPeriod,
        totalPrice,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormProvider(): FormProviderContext {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("Form is not available");
  }

  return context;
}
