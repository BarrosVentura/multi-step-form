export function ButtonContainer({ children }: { children: React.ReactNode }) {
  const isMultipleChildren = Array(children).flat(1).length > 1;
  return (
    <div
      className={`md:static md:bg-transparent md:mt-5 md:p-0 md:border-transparent absolute bottom-0 left-0 bg-white w-full px-6 py-4 flex ${
        isMultipleChildren ? "justify-between" : "justify-end"
      } border-t `}
    >
      {children}
    </div>
  );
}
