export function ButtonContainer({ children }: { children: React.ReactNode }) {
  const isMultipleChildren = Array(children).flat(1).length > 1;
  return (
    <div
      className={`lg:static lg:bg-transparent lg:mt-5 lg:p-0 lg:border-transparent absolute bottom-0 left-0 bg-white w-full px-6 py-4 flex ${
        isMultipleChildren ? "justify-between" : "justify-end"
      } border-t `}
    >
      {children}
    </div>
  );
}
