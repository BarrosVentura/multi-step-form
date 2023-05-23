interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className=" bg-marine-blue text-light-gray py-3 px-5 rounded-md hover:brightness-125 disabled:bg-cool-gray disabled:text-alabaster transition-all"
      {...props}
    >
      {children}
    </button>
  );
}
