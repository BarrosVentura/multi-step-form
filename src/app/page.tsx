import Image from "next/image";
// import sidebarBackground from "../../public/images/bg-sidebar-desktop.svg";

export default function Home() {
  return (
    <section className="bg-white shadow-lg p-6 rounded-xl xl:w-[80%] flex gap-28">
      <aside
        className={`bg-[url('../../public/images/bg-sidebar-desktop.svg')]`}
      >
        <ul>
          <li>
            <span>step 1</span>
            <h2>your info</h2>
          </li>
          <li>
            <span>step 2</span>
            <h2>select plan</h2>
          </li>
          <li>
            <span>step 3</span>
            <h2>add-ons</h2>
          </li>
          <li>
            <span>step 4</span>
            <h2>summary</h2>
          </li>
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
