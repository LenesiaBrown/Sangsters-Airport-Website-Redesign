import { useState } from "react";
import heroImg from "../assets/home_background.jpg";
import discoverJA from "../assets/discover_jamaica.jpg";
import update_card1 from "../assets/update_card1.jpg";
import update_card2 from "../assets/update_card2.jpg";
import update_card3 from "../assets/update_card3.jpg";




export default function Home() {
  const [tab, setTab] = useState("departures"); // controls Departures / Arrivals tab
  const [flight, setFlight] = useState("");
  const [date, setDate] = useState("");

  return (
    <div>
      {/* ---------- HERO ---------- */}
      <section
        className="relative w-full h-[640px] bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label="Aerial view of Montego Bay coastline"
      >
        {/* Dark overlay so white text is readable */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content centered inside hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Welcome to Montego Bay, Jamaica
          </h1>

          <p className="mt-4 text-sm md:text-xl text-white/90 max-w-2xl">
            Your gateway to the beautiful island of Jamaica at Sangster International Airport, Montego Bay.
          </p>

          <div className="mt-6 flex gap-4">
            <button
              type="button"
              className="bg-[#F59E0B] text-black px-5 py-2 rounded-md font-semibold shadow hover:bg-orange-500 transition"
            >
              Check Flight Status
            </button>

            <button
              type="button"
              className="bg-[#F59E0B] text-black px-5 py-2 rounded-md font-medium shadow-md hover:bg-orange-500 transition"
            >
              Airport Information
            </button>
          </div>
        </div>

        <button
  type="button"
  aria-label="Scroll to search"
  onClick={() => {
    console.log("arrow clicked");
    const el = document.getElementById("search-card");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }}
  className="absolute left-1/2 -translate-x-1/2 bottom-6 flex items-center justify-center z-50"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>


      </section>
      {/* ---------- SEARCH CARD ---------- */}
<div id="search-card" className="max-w-4xl mx-auto px-4">
  <div className="bg-white rounded-xl shadow-xl mt-8 p-6">
    {/* Tabs (centered pill-style) */}
    <div className="flex items-center justify-center mb-6">
      <div className="inline-flex rounded-full bg-gray-100 p-1">
        <button
          onClick={() => setTab("departures")}
          aria-pressed={tab === "departures"}
          className={`px-6 py-2 rounded-full text-sm transition-shadow focus:outline-none font-semibold 
            ${tab === "departures"
              ? "bg-[#F59E0B] text-black shadow-sm"
              : "bg-transparent text-gray-600 hover:bg-gray-200"}
          `}
        >
          Departures
        </button>

        <button
          onClick={() => setTab("arrivals")}
          aria-pressed={tab === "arrivals"}
          className={`px-6 py-2 rounded-full text-sm transition-shadow focus:outline-none font-semibold
            ${tab === "arrivals"
              ? "bg-[#F59E0B] text-black shadow-sm"
              : "bg-transparent text-gray-600 hover:bg-gray-200"}
          `}
        >
          Arrivals
        </button>
      </div>
    </div>

    {/* Form row */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
      {/* Flight number */}
      <div>
        <label className="text-sm text-black font-semibold block mb-1">Flight Number</label>
        <input
          value={flight}
          onChange={(e) => setFlight(e.target.value)}
          placeholder="e.g. BA2263"
          className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="Flight number"
        />
      </div>

      {/* Date */}
      <div>
        <label className="text-sm text-black font-semibold block mb-1">Date</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="Flight date"
        />
      </div>

      {/* Search button */}
      <div className="flex items-end">
        <button
          type="button"
          className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded font-semibold shadow"
          onClick={() => alert(`Searching ${tab} for ${flight || "any flight"} on ${date || "any date"}`)}
        >
          Search Flights
        </button>
      </div>
    </div>
  </div>
</div>


      {/* small spacer so page continues below */}
      <div className="h-10" />



      {/* SERVICES */}

      <section className="mt-12">
        <div className="bg-[#EFF6FF] py-12">                  
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Services We Offer</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service card 1 */}
              <div className="bg-white rounded-2xl p-6 min-h-[180px] flex flex-col items-center text-center shadow-md" style={{ boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#E6F0FF' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-1.5 -1.5 24 24" aria-hidden="true">
                <path fill="#2659f4" d="m10.725 9.094l-5.509 5.51l-1.87-.777l-.167.169l2.38 1.587l1.588 2.38l.168-.168l-.776-1.87l5.509-5.508l4.328 6.252l.21-.208l-2.887-7.696l4.4-4.398a.935.935 0 0 0-1.323-1.323l-4.4 
                4.399l-7.694-2.886l-.21.209zm5.39 10.483l-4.33-6.253l-3.04 3.04l.777 1.87l-2.666 2.665l-2.645-3.967l-3.968-2.646l2.666-2.666l1.869.776l3.04-3.04l-6.253-4.328l2.646-2.645l7.695 2.885l3.547-3.547a2.806 2.806 
                0 1 1 3.968 3.968l-3.547 3.547l2.886 7.696l-2.646 2.645z"></path></svg>
                </div>
                <div className="text-lg font-semibold">Flight Info</div>
                <div className="mt-2 text-sm text-[#5A6370]">Check real-time flight status</div>
              </div>

              {/* Service card 2 */}
              <div className="bg-white rounded-2xl p-6 min-h-[180px] flex flex-col items-center text-center shadow-md" style={{ boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFF4E6' }}>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd" aria-hidden="true">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-
                    .004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                    <path fill="#F59E0B" d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 
                    2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></path></g></svg>
                </div>
                <div className="text-lg font-semibold">Terminal Map</div>
                <div className="mt-2 text-sm text-[#5A6370]">Navigate the airport easily</div>
              </div>

              {/* Service card 3 */}
              <div className="bg-white rounded-2xl p-6 min-h-[180px] flex flex-col items-center text-center shadow-md" style={{ boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#EAFDF1' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="none" stroke="#16A34A" strokeWidth={2} d="M5 5.997C5 5.447 5.45 5 6.007 5h11.986C18.55 5 19 5.453 19 5.997V13H5zM22 8v7.003c0 .55-.455.997-.992.997H2.992A1 1 0 0 1 2 15.003V8m3 8v2zm14 0v2z"></path>
                  </svg>
                </div>
                <div className="text-lg font-semibold">Club MoBay Lounge</div>
                <div className="mt-2 text-sm text-[#5A6370]">Enjoy personalized service, fast track privileges and much more!</div>
              </div>

              {/* Service card 4 */}
              <div className="bg-white rounded-2xl p-6 min-h-[180px] flex flex-col items-center text-center shadow-md" style={{ boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFF2F3' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
                    <g fill="none" stroke="#FF4D6D" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                      <path d="M20 22.002v-5.974c0-.95 0-1.424-.158-1.798a2 2 0 0 0-1.046-1.055c-.373-.161-.847-.165-1.796-.173c0 5-5 7-5 7s-5-2-5-7c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.082C4 14.604 4 15.07 4 16.002v6"></path>
                      <path d="m12 13.5l2-1v2zm0 0l-2-1v2zm3.5-7v-1a3.5 3.5 0 0 0-7 0v1a3.5 3.5 0 1 0 7 0"></path>
                    </g>
                  </svg>
                </div>
                <div className="text-lg font-semibold">'Red Cap' Porter Service</div>
                <div className="mt-2 text-sm text-[#5A6370]">Efficient and courteous porters will assist passengers in moving their bags</div>
              </div>
            </div>
          </div>
        </div>



        {/* DISCOVER JAMAICA */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Discover Jamaica</h3>
              <p className="text-gray-600 mb-6">
                Jamaica lies 550 miles south of Florida at the very heart of the Caribbean. The island is famous for the unique appeal of its scenic and rugged interior 
                – the Blue Mountains rise to well over 7,000 feet – combined with the unmatched beauty of dazzling tropical beaches bordering the blue-green water of the Caribbean Sea.
              </p>
              <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md transition">Explore Transportation Options</button>
            </div>
            <div>
              <img src={discoverJA} alt="Jamaica beach" className="w-full rounded-xl shadow-md object-cover h-108" />
            </div>
          </div>
        </div>


          {/* LATEST UPDATES */}
        <div className="bg-[#EFF8FF] py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Latest Updates</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Update card 1 */}
              <article className="bg-white rounded-lg p-4 shadow-md">
                <img src={update_card1} alt="" className="w-full h-36 object-cover rounded-md mb-3"/>
                <h4 className="font-semibold mb-2">World2Fly launches its new direct flight between Lisbon and Montego Bay (Jamaica)</h4>
                <p className="text-sm text-gray-600">Lisbon, 5 June 2025 - World2Fly made aviation history yesterday as its inaugural direct flight from Lisbon...</p>
                <a className="text-blue-600 text-sm mt-3 inline-block">Read More</a>
              </article>

              {/* Update card 2 */}
              <article className="bg-white rounded-lg p-4 shadow-md">
                <img src={update_card2} alt="" className="w-full h-36 object-cover rounded-md mb-3"/>
                <h4 className="font-semibold mb-2">MBJ Airports Limited Introduces "Park Smart" New parking arrangements take...</h4>
                <p className="text-sm text-gray-600">MBJ Airports Limited (MBJ), operators of the Sangster International Airport (SIA), is implementing new parking...</p>
                <a className="text-blue-600 text-sm mt-3 inline-block">Read More</a>
              </article>

              {/* Update card 3 */}
              <article className="bg-white rounded-lg p-4 shadow-md">
                <img src={update_card3} alt="" className="w-full h-36 object-cover rounded-md mb-3"/>
                <h4 className="font-semibold mb-2">Sangster International Airport warns public about fraudulent Lost and Found page</h4>
                <p className="text-sm text-gray-600">Sangster International Airport (SIA) authorities have been alerted to fraudulent Facebook pages falsely...</p>
                <a className="text-blue-600 text-sm mt-3 inline-block">Read More</a>
              </article>
            </div>
          </div>
        </div>

      </section>

      <section className="bg-[#F59E0B]">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 text-center">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-3">
            Ready to Experience Jamaica?
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-black/90 max-w-3xl mx-auto mb-6">
            Find up-to-date flight status, plan your journey, and discover airport services on Sangster International Airport’s website.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => { /* go to search card */ 
                const el = document.getElementById('search-card');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="bg-black text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-gray-800 transition"
            >
              Check Flight Status
            </button>

            <button
              onClick={() => { /* navigate to planning or contact page */ }}
              className="bg-white text-black px-6 py-2 rounded-md font-medium border border-black hover:bg-gray-100 transition"
            >
              Plan Your Travel
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
