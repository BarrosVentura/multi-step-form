import { Body } from "@/components/Body";

export default function SummaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Body
      title="Finishing up"
      paragraph="Double-check everything looks OK before confirming."
    >
      {children}
    </Body>
  );
}
