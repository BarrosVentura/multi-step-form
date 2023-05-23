import { Body } from "@/components/Body";

export default function AddonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Body
      title="Pick add-ons"
      paragraph="Add-ons help enchance your gaming experience."
    >
      {children}
    </Body>
  );
}
