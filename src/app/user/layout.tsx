import { Body } from "@/components/Body";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Body
      title="Personal info"
      paragraph="Please provide your name, email address and phone number."
    >
      {children}
    </Body>
  );
}
