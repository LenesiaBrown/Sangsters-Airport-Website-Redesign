import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/airport_logo.png"; // fallback used below

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");


  return (
    <header className="w-full">
      {/* Top bar: black with logo, search center, icons right */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-0 py-3 flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <Link to="/">
              {typeof logo === "string" ? (
                <img src={logo} alt="Sangster logo" className="w-28 h-28 object-contain" />
              ) : (
                <div className="w-28 h-28 flex items-center justify-center bg-white text-black font-bold rounded">SI</div>
              )}
            </Link>
            {/* text column same height as logo + spacing controlled */}
            <Link to="/">
              <div className="h-16 flex flex-col justify-between py-1">
                <div className="text-lg font-semibold leading-none">Sangster</div>
                <div className="text-lg font-semibold leading-none">International</div>
                <div className="text-lg font-semibold leading-none">Airport</div>
              </div>
            </Link>
          </div>

           
          <div className="flex-1 flex justify-center px-4">
            <div className="mx-auto w-full max-w-[520px]">
              <div className="relative">
                {/* Input */}
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  aria-label="Search"
                  className="block w-full h-12 rounded-full bg-[#22242a] placeholder:text-gray-400 text-gray-100 pr-12 pl-4 border border-transparent
                    focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm transition"
                />

                {/* Search button */}
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition"
                  aria-label="Submit search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-[#8D94A1]">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>



          {/* Right: weather */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-md text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-[#F59E0B]">
              <path d="M9.5 6C5.91015 6 3 8.91015 3 12.5C3 16.0899 5.91015 19 9.5 19H16.5C18.9853 19 21 16.9853 21 14.5C21 12.0147 18.9853 10 16.5 
              10C16.1717 10 15.8516 10.0352 15.5433 10.1019C14.589 7.69894 12.2429 6 9.5 6ZM16.5 21H9.5C4.80558 21 1 17.1944 1 12.5C1 7.80558 4.80558 4 9.5 4C12.5433 4 15.2131 5.59939 16.7146 
              8.00348C20.2051 8.11671 23 10.982 23 14.5C23 18.0899 20.0899 21 16.5 21Z"></path></svg>
              <span>26°C</span>
          </div>

          {/* Language dropdown */}
          <div className="relative">
            {/* Button that opens the dropdown */}
            <button
              type="button"
              onClick={() => setLanguageOpen((prev) => !prev)}
              className="flex items-center gap-1 text-md text-gray-200 cursor-pointer"
            >
              {/* Globe icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z" />
              </svg>

              {/* Selected language text */}
              <span>{selectedLanguage}</span>

              {/* Down arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown menu */}
            {languageOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-md bg-[#111827] border border-gray-700 shadow-lg z-50">
                {["English", "Spanish", "French"].map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setLanguageOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-800 ${
                      selectedLanguage === lang ? "text-yellow-400" : "text-gray-200"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>


            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white ml-2 text-3xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary navigation row */}
      <div className="bg-black border-t border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-0">
          <div className="flex items-center justify-between">
            {/* Left: nav links (desktop) */}
            <nav className="hidden md:flex gap-8 py-3 items-center text-white text-md font-semibold">
              <Link to="/arrivals" className="hover:text-yellow-400">Flights</Link>
              <Link to="#" className="hover:text-yellow-400">Services</Link>
              <Link to="#" className="hover:text-yellow-400">Shopping</Link>
              <Link to="#" className="hover:text-yellow-400">Dining</Link>
              <Link to="#" className="hover:text-yellow-400">Transportation</Link>
              <Link to="#" className="hover:text-yellow-400">About</Link>
            </nav>

            {/* Right: Contact button (desktop only) */}
            <div className="hidden md:flex py-3 items-center">
              <Link
                to="#"
                className="ml-4 bg-orange-400 text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-orange-500"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile nav (collapsible) */}
          {isOpen && (
            <nav className="md:hidden flex flex-col gap-2 pb-4 pt-2 text-white text-md">
              <Link to="/arrivals" className="px-2 font-semibold hover:text-yellow-400">Flights</Link>
              <Link to="#" className="px-2 font-semibold hover:text-yellow-400">Services</Link>
              <Link to="#" className="px-2 font-semibold hover:text-yellow-400">Shopping</Link>
              <Link to="#" className="px-2 font-semibold hover:text-yellow-400">Dining</Link>
              <Link to="#" className="px-2 font-semibold hover:text-yellow-400">Transportation</Link>
              <Link to="#" className="px-2 font-semibold hover:text-yellow-400">About</Link>
              <Link to="#" className="mt-3 inline-flex items-center justify-center bg-orange-400 text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-orange-500 self-start">Contact</Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
