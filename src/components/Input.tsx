import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  type: "text" | "email" | "tel";
  error?: FieldError;
  title: string;
  id: string;
  register: UseFormRegisterReturn;
  placeholder: string;
}

export function Input({
  id,
  type,
  error,
  title,
  register,
  placeholder,
  ...props
}: InputProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <label className="text-marine-blue" htmlFor={id}>
          {title}
        </label>
        {error && (
          <span className="text-strawberry-red font-medium text-sm">
            {error.message}
          </span>
        )}
      </div>
      <input
        {...register}
        id={id}
        className={`block w-full border border-light-gray rounded-md p-2 mt-1 mb-4 ${
          error && "border-strawberry-red"
        }`}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
}
