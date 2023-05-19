"use client";

import { createContext, useContext } from "react";

interface FormProviderProps {
  children: React.ReactNode;
}

interface FormProviderContext {
  active: number;
}

export const FormContext = createContext({} as FormProviderContext);

export function FormProvider({ children }: FormProviderProps) {
  return (
    <FormContext.Provider
      value={{
        active: 1,
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
