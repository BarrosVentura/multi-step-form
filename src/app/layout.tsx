import { ListItem } from "@/components/ListItem";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import { FormProvider } from "./form-provider";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} bg-magnolia flex min-h-screen flex-col items-center justify-between md:p-24`}
      >
        <section className="grid md:grid-cols-[275px_1fr] md:bg-white md:shadow-lg md:p-6 md:rounded-xl xl:w-[80%] w-full xl:max-w-[1440px] md:gap-28  min-h-[600px]">
          <aside
            className={`md:bg-desktop-pattern bg-mobile-pattern bg-cover bg-no-repeat bg-center h-full md:rounded-lg md:pl-8 md:pt-8 md:pb-0 pb-16 sm:block flex justify-center`}
          >
            <ul className="flex md:flex-col gap-6">
              <ListItem order={1} id={"user"} title="your info" />
              <ListItem order={2} id={"plan"} title="select plan" />
              <ListItem order={3} id={"addons"} title="add-ons" />
              <ListItem order={4} id={"summary"} title="summary" />
            </ul>
          </aside>
          <FormProvider>{children}</FormProvider>
        </section>
      </body>
    </html>
  );
}
