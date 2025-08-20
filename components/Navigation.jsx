import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = ({ dataId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    "Nosotros",
    "Cromo duro",
    "Rectificado",
    "Aplicaciones",
    "Cuidado ambiental",
    "Contacto",
  ];
  return (
    <nav
      className="w-full bg-[var(--durex-dark)] fixed top-0 shadow-[0px_4px_6px_1px_#583b8f33] z-99"
      data-id={dataId}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#hero">
              <img
                src="/logo-h-c.svg"
                alt="Durex Crom"
                className="h-8 w-auto"
              />
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--durex-primary)]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex md:ml-6 md:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 hover:text-gray-100 border-b-2 border-transparent hover:border-gray-300"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=5491149488179"
            className="hidden md:flex py-1 px-3 text-white bg-green-800 rounded items-center justify-center my-auto font-semibold gap-2 border-2 border-green-800 hover:bg-transparent cursor-pointer"
          >
            <div className="relative h-8 w-8 flex items-center justify-center">
              <svg
                width="22"
                height="23"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.503 0.129882L12.497 0.129882C5.605 0.129882 -2.45055e-07 5.73608 -5.46392e-07 12.6299C-6.65917e-07 15.3643 0.881004 17.8987 2.38 19.9565L0.822005 24.6002L5.627 23.0643C7.603 24.3737 9.961 25.1299 12.503 25.1299C19.395 25.1299 25 19.5221 25 12.6299C25 5.73768 19.395 0.129883 12.503 0.129882Z"
                  fill="white"
                />
                <path
                  d="M19.777 17.7814C19.475 18.633 18.278 19.3393 17.323 19.5455C16.67 19.6846 15.817 19.7955 12.945 18.6049C9.272 17.083 6.906 13.3502 6.722 13.108C6.545 12.8658 5.237 11.1315 5.237 9.33771C5.237 7.54401 6.148 6.67051 6.516 6.29551C6.817 5.98771 7.316 5.84711 7.794 5.84711C7.948 5.84711 8.087 5.85491 8.212 5.86111C8.58 5.87681 8.764 5.89861 9.00599 6.47831C9.30799 7.20491 10.042 8.99861 10.13 9.18301C10.219 9.36741 10.308 9.61741 10.183 9.85961C10.066 10.1096 9.962 10.2205 9.778 10.433C9.594 10.6455 9.419 10.808 9.234 11.0361C9.066 11.2346 8.875 11.4471 9.087 11.8143C9.3 12.1736 10.034 13.3721 11.116 14.3346C12.511 15.5768 13.642 15.9736 14.047 16.1424C14.348 16.2674 14.708 16.2377 14.928 16.0033C15.208 15.7018 15.553 15.2018 15.905 14.7096C16.155 14.3565 16.47 14.3127 16.802 14.4377C17.139 14.5549 18.925 15.4377 19.292 15.6205C19.659 15.8049 19.902 15.8924 19.991 16.0471C20.078 16.2018 20.078 16.9283 19.777 17.7814Z"
                  fill="#016630"
                />
              </svg>
            </div>
            Contactanos
          </a>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-400 hover:text-gray-100"
            >
              {item}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=5491149488179"
            className="flex mx-3 py-1 px-3 text-white bg-green-600 rounded items-center justify-center my-auto font-semibold gap-2 border-2 border-green-600 hover:bg-transparent cursor-pointer"
          >
            <div className="relative h-8 w-8 flex items-center justify-center">
              <svg
                width="22"
                height="23"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.503 0.129882L12.497 0.129882C5.605 0.129882 -2.45055e-07 5.73608 -5.46392e-07 12.6299C-6.65917e-07 15.3643 0.881004 17.8987 2.38 19.9565L0.822005 24.6002L5.627 23.0643C7.603 24.3737 9.961 25.1299 12.503 25.1299C19.395 25.1299 25 19.5221 25 12.6299C25 5.73768 19.395 0.129883 12.503 0.129882Z"
                  fill="white"
                />
                <path
                  d="M19.777 17.7814C19.475 18.633 18.278 19.3393 17.323 19.5455C16.67 19.6846 15.817 19.7955 12.945 18.6049C9.272 17.083 6.906 13.3502 6.722 13.108C6.545 12.8658 5.237 11.1315 5.237 9.33771C5.237 7.54401 6.148 6.67051 6.516 6.29551C6.817 5.98771 7.316 5.84711 7.794 5.84711C7.948 5.84711 8.087 5.85491 8.212 5.86111C8.58 5.87681 8.764 5.89861 9.00599 6.47831C9.30799 7.20491 10.042 8.99861 10.13 9.18301C10.219 9.36741 10.308 9.61741 10.183 9.85961C10.066 10.1096 9.962 10.2205 9.778 10.433C9.594 10.6455 9.419 10.808 9.234 11.0361C9.066 11.2346 8.875 11.4471 9.087 11.8143C9.3 12.1736 10.034 13.3721 11.116 14.3346C12.511 15.5768 13.642 15.9736 14.047 16.1424C14.348 16.2674 14.708 16.2377 14.928 16.0033C15.208 15.7018 15.553 15.2018 15.905 14.7096C16.155 14.3565 16.47 14.3127 16.802 14.4377C17.139 14.5549 18.925 15.4377 19.292 15.6205C19.659 15.8049 19.902 15.8924 19.991 16.0471C20.078 16.2018 20.078 16.9283 19.777 17.7814Z"
                  fill="#016630"
                />
              </svg>
            </div>
            Contactanos
          </a>
        </div>
      </div>
    </nav>
  );
};
