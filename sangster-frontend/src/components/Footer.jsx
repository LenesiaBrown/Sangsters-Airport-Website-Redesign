import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white">     
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-3">Travel Planning</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link to="#" className="hover:underline">International Airlines</Link></li>
              <li><Link to="#" className="hover:underline">Domestic Airlines</Link></li>
              <li><Link to="#" className="hover:underline">Routes</Link></li>
              <li><Link to="#" className="hover:underline">Immigration</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link to="#" className="hover:underline">Parking</Link></li>
              <li><Link to="#" className="hover:underline">Transportation</Link></li>
              <li><Link to="#" className="hover:underline">Shopping & Dining</Link></li>
              <li><Link to="#" className="hover:underline">Passenger Services</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-3">Information</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link to="#" className="hover:underline">About Us</Link></li>
              <li><Link to="#" className="hover:underline">Environmental Efforts</Link></li>
              <li><Link to="#" className="hover:underline">Careers</Link></li>
              <li><Link to="#" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-3">Connect With Us</h4>
            <div className="flex gap-3 items-center mb-4">
              <a href="#" aria-label="Instagram" className="text-gray-200 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-200 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                </svg>
              </a>
              <a href="#" aria-label="X" className="text-gray-200 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 14 14">
                    <g fill="none">
                        <g clipPath="url(#SVGG1Ot4cAD)">
                            <path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"></path>
                        </g>
                        <defs>
                            <clipPath id="SVGG1Ot4cAD">
                                <path fill="#fff" d="M0 0h14v14H0z"></path>
                            </clipPath>
                        </defs>
                    </g>
                </svg>
              </a>
            </div>
          </div>        
        </div>
      </div>

      {/* ---- FULL-WIDTH DIVIDER ---- */}
        <div className="w-full border-t border-gray-400 mt-10" />

        {/* ---- BOTTOM BAR ---- */}
        <div className="flex flex-col md:flex-row items-center md:justify-between py-6 gap-4">

          {/* Right: links aligned right */}
          <div className="flex flex-wrap gap-6 text-sm ml-auto pr-6">
            <a href="/sitemap" className="text-gray-300 hover:text-white">Site map</a>
            <a href="/privacy" className="text-gray-300 hover:text-white">Privacy policy</a>
            <a href="/terms" className="text-gray-300 hover:text-white">Terms of service</a>
          </div>
          </div>
    </footer>
  );
}
