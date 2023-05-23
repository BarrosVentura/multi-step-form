export function Body({
  title,
  paragraph,
  children,
  center,
}: {
  title?: string;
  paragraph?: string;
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <main
      className={`flex flex-col lg:pt-8 lg:pr-12 lg:pl-0 lg:pb-0  lg:w-auto lg:mt-0 lg:shadow-none rounded-lg bg-white w-[90%] m-auto mt-[-60px] p-6 shadow-lg ${
        center && "items-center"
      }`}
    >
      {title && (
        <h1 className="text-3xl font-medium text-marine-blue mb-2">{title}</h1>
      )}
      {paragraph && <p className="text-cool-gray text-sm mb-4">{paragraph}</p>}
      {children}
    </main>
  );
}
