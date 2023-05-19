import { ListItem } from "@/components/ListItem";

export default function Home() {
  return (
    <section className="grid grid-cols-[275px_1fr] bg-white shadow-lg p-6 rounded-xl xl:w-[80%] xl:max-w-[1440px] gap-28  min-h-[600px]">
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
      <main className="pt-8 flex flex-col pr-12">
        <h1 className="text-3xl font-medium text-marine-blue mb-2">
          Personal info
        </h1>
        <p className="text-cool-gray text-sm mb-4">
          Please provide your name, email address and phone number.
        </p>
        <form className="flex flex-col justify-between flex-1">
          <div>
            <label className="text-marine-blue" htmlFor="name">
              Name
            </label>
            <input
              className="block w-full border border-light-gray rounded-md p-2 mt-1 mb-4"
              id="name"
              type="text"
              placeholder="e.g. Stephen King"
            />
            <label className="text-marine-blue" htmlFor="email">
              Email Address
            </label>
            <input
              className="block w-full border border-light-gray rounded-md p-2 mt-1 mb-4"
              id="email"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
            />
            <label className="text-marine-blue" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="block w-full border border-light-gray rounded-md p-2 mt-1 mb-4"
              id="phone"
              type="tel"
              placeholder="e.g. +1 234 567 890"
            />
          </div>

          <button className="self-end bg-marine-blue text-light-gray py-3 px-5 rounded-lg">
            Next Step
          </button>
        </form>
      </main>
    </section>
  );
}
