export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-8 flex flex-col justify-center items-center pr-12">
      {children}
    </main>
  );
}
