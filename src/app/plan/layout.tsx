export default function PlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-8 flex flex-col pr-12">
      <h1 className="text-3xl font-medium text-marine-blue mb-2">
        Select your plan
      </h1>
      <p className="text-cool-gray text-sm mb-9">
        You have the option of monthly or yearly billing
      </p>
      {children}
    </main>
  );
}
