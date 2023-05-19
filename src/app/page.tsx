import { ListItem } from "@/components/ListItem";

export default function Home() {
  return (
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
  );
}
