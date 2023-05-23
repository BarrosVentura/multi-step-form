import { Body } from "@/components/Body";

export default function PlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Body
      title="Select your plan"
      paragraph="You have the option of monthly or yearly billing"
    >
      {children}
    </Body>
  );
}
