"use client";

import { createContext, useContext, useState } from "react";

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
  setFormContent: (data: FormContent) => void;
}

export const FormContext = createContext({} as FormProviderContext);

export function FormProvider({ children }: FormProviderProps) {
  const [formContent, setFormContent] = useState<FormContent>({
    active: 1,
  });

  return (
    <FormContext.Provider
      value={{
        formContent,
        setFormContent,
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
