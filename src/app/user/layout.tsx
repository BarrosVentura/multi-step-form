export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col md:pt-8 md:pr-12 md:pl-0 md:pb-0  md:w-auto md:mt-0 rounded-lg bg-white w-[90%] m-auto mt-[-60px] p-6">
      <h1 className="text-3xl font-medium text-marine-blue mb-2">
        Personal info
      </h1>
      <p className="text-cool-gray text-sm mb-4">
        Please provide your name, email address and phone number.
      </p>
      {children}
    </main>
  );
}
