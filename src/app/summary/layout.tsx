export default function SummaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-8 flex flex-col pr-12">
      <h1 className="text-3xl font-medium text-marine-blue mb-2">
        Finishing up
      </h1>
      <p className="text-cool-gray text-sm mb-9">
        Double-check everything looks OK before confirming.
      </p>
      {children}
    </main>
  );
}
