"use client";

import { ROUTES } from "@/routes/routes";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface FormProviderProps {
  children: React.ReactNode;
}

interface FormContent {
  active: number;
  name?: string;
  email?: string;
  phone?: number;
}
interface FormProviderContext {
  formContent: FormContent;
  handleFormContent: (data: FormContent) => void;
}

export const FormContext = createContext({} as FormProviderContext);

export function FormProvider({ children }: FormProviderProps) {
  const [formContent, setFormContent] = useState<FormContent>({
    active: 1,
  });
  const pathname = usePathname();

  function handleFormContent(data: FormContent) {
    setFormContent((state) => ({ ...state, ...data }));
  }

  useEffect(() => {
    const currentPath = ROUTES.findIndex((route) =>
      pathname.startsWith(`/${route}`)
    );
    console.log(currentPath, pathname);

    if (currentPath > -1) {
      handleFormContent({ active: currentPath + 1 });
    }
  }, [pathname]);

  return (
    <FormContext.Provider
      value={{
        formContent,
        handleFormContent,
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
