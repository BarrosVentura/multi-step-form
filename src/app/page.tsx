import { ListItem } from "@/components/ListItem";
import Image from "next/image";
// import sidebarBackground from "../../public/images/bg-sidebar-desktop.svg";

export default function Home() {
  return (
    <section className="grid grid-cols-[275px_1fr] bg-white shadow-lg p-6 rounded-xl xl:w-[80%] gap-28  min-h-[600px]">
      <aside
        className={`bg-[url('../../public/images/bg-sidebar-desktop.svg')] bg-no-repeat h-full rounded-lg pl-8 pt-8`}
      >
        <ul className="flex flex-col gap-6">
          <ListItem active order={1} title="your info" />
          <ListItem order={2} title="select plan" />
          <ListItem order={3} title="add-ons" />
          <ListItem order={4} title="summary" />
        </ul>
      </aside>
      <main>
        <h1>Personal info</h1>
        <p>Please provide your name, email address and phone number.</p>
        <form>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="e.g. Stephen King" />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" placeholder="e.g. +1 234 567 890" />

          <button>Next Step</button>
        </form>
      </main>
    </section>
  );
}
