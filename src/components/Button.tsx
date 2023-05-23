export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className=" bg-marine-blue text-light-gray py-3 px-5 rounded-md hover:brightness-125 transition-all">
      {children}
    </button>
  );
}
