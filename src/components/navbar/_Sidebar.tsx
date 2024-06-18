import { menuLinks } from "@/typescript/constants";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="text-neutral-800 dark:text-neutral-100"
        onClick={() => setOpen(true)}
      >
        <IoMdMenu size={35} />
      </button>
      <aside
        className={`${
          open
            ? "flex flex-col bg-zinc-100 dark:bg-zinc-800 border-left fixed top-0 right-0 w-80 h-full py-4 px-5 shadow-xl shadow-zinc-90 transition-all duration-300 ease-in-out z-50"
            : "flex flex-col bg-zinc-100 dark:bg-zinc-800 border-left fixed top-0 -right-80 w-80 h-full py-4 px-5 shadow-xl shadow-zinc-90 transition-all duration-300 ease-in-out z-50"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="w-full flex justify-end mb-5"
        >
          <IoMdClose size={35} />
        </button>
        <nav className="">
          <ul className="flex flex-col">
            {menuLinks.en.map((link) => (
              <a href={link.name} className="">
                {link.name}
              </a>
            ))}
          </ul>
        </nav>
        <div className="hidden bg-zinc-800 h-44 items-center justify-center rounded-md mt-auto">
          SocialLinks
        </div>
      </aside>

      <span
        onClick={() => setOpen(false)}
        className={`${
          open
            ? "transition duration-300 ease-in-out fixed top-0 left-0 w-full h-screen bg-neutral-700/60 dark:bg-neutral-900/75 z-40"
            : "opacity-0"
        }`}
      />
    </>
  );
}
export default Sidebar;
