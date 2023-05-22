export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-8 flex flex-col pr-12">
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
