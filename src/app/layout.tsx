import { Ubuntu } from "next/font/google";
import { FormProvider } from "./form-provider";
import { Sidebar } from "@/components/Sidebar";

import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Multi step form",
  description:
    "A Example of multi step form using NextJS 13, Typescript, Zod and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} bg-magnolia flex min-h-screen flex-col items-center justify-between lg:p-24`}
      >
        <section className="grid lg:grid-cols-[275px_1fr] lg:bg-white lg:shadow-lg lg:p-6 lg:rounded-xl lg:w-[80%] w-full lg:max-w-[1440px] lg:gap-28  min-h-[600px]">
          <Sidebar />
          <FormProvider>{children}</FormProvider>
        </section>
      </body>
    </html>
  );
}
