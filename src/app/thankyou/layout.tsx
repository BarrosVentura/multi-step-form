import { Body } from "@/components/Body";

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Body center>{children}</Body>;
}
