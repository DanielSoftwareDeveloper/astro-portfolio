import { useState } from "preact/hooks";
import { menuLinks, socialLinks } from "../../typescript/constants";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*Sidebar button*/}
      <button
        class="text-slate-800 dark:text-slate-100"
        onClick={() => setOpen(true)}
      >
        x
      </button>

      {/*Sidebar background*/}
      <div
        onClick={() => setOpen(false)}
        class={`${
          !open && "hidden"
        } bg-neutral-700/40 fixed top-0 left-0 w-full h-screen cursor-pointer -z-40`}
      />

      {/*Sidebar*/}
      <div
        class={`${
          open ? "w-[60%]" : "w-0 p-0"
        } fixed bg-neutral-800 text-white top-0 right-0 h-screen shadow-2xl p-8 z-50 transition-all duration-200`}
      >
        <div className="flex flex-col">
          <ul className="">
            {menuLinks.map((link) => (
              <li className="">
                <a href={link.href} className="">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr class="border-neutral-600 my-10" />
        <div class={`${!open && "hidden"} bg-neutral-700 flex justify-center`}>
          {socialLinks.map((link) => (
            <p className="">{link.icon}</p>
          ))}
        </div>
      </div>
    </>
  );
}
