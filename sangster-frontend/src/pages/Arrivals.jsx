import { useState, useMemo } from "react";
import StatusPill from "../components/StatusPill";


export default function Arrivals() {
  // --- Mock flight data (replace with API later) ---
  const initialFlights = [
    { id: 1, flight: "B62521", airline: "JetBlue", origin: "Orlando (MCO)", scheduled: "07:08:00 AM", estimated: "07:08:00 AM", status: "Landed", gate: "2" },
    { id: 2, flight: "B61179", airline: "JetBlue", origin: "New York (JFK)", scheduled: "09:24:00 AM", estimated: "09:24:00 AM", status: "On Time", gate: "10" },
    { id: 3, flight: "WS2708", airline: "WestJet", origin: "Toronto (YYZ)", scheduled: "10:34:00 AM", estimated: "10:02:00 AM", status: "Early", gate: "8" },
    { id: 4, flight: "WN906", airline: "Southwest", origin: "Baltimore (BWI)", scheduled: "01:55:00 PM", estimated: "02:48:00 PM", status: "Delayed", gate: "5" },
  ];

  // --- Local state ---
  const [flights] = useState(initialFlights); // replace with fetch later
  const [query, setQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All"); // All Flights/Landed/On Time/Early/Delayed
  const [lastUpdated] = useState(() => {
    // simple static timestamp for demo
    const d = new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  });

  // Derived filtered list (search + status filter)
  const visible = useMemo(() => {
    return flights.filter((f) => {
      const matchQuery =
        query.trim() === "" ||
        f.flight.toLowerCase().includes(query.toLowerCase()) ||
        f.airline.toLowerCase().includes(query.toLowerCase()) ||
        f.origin.toLowerCase().includes(query.toLowerCase());
      const matchStatus = filterStatus === "All" || f.status === filterStatus;
      return matchQuery && matchStatus;
    });
  }, [flights, query, filterStatus]);

  return (
      <main className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <h1 className="text-2xl font-bold">Flight Arrivals</h1>
                <p className="text-sm text-gray-600">Real-time arrival information for Sangster International Airport</p>
            </div>

            <div className="flex items-center gap-4">
                <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 rounded-md border border-[#E4E4E7] px-3 py-2 text-sm font-medium bg-white hover:bg-gray-50 cursor-pointer"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                        <path d="M20.5 8c-1.392-3.179-4.823-5-8.522-5C7.299 3 3.453 6.552 3 11.1"></path>
                        <path d="M16.489 8.4h3.97A.54.54 0 0 0 21 7.86V3.9M3.5 16c1.392 3.179 4.823 5 8.522 5c4.679 0 8.525-3.552 8.978-8.1"></path>
                        <path d="M7.511 15.6h-3.97a.54.54 0 0 0-.541.54v3.96"></path>
                    </g>
                </svg>
                 Refresh
                </button>
                <div className="text-sm text-gray-500">Last Updated: {lastUpdated}</div>
            </div>
            </div>
        </div>

        {/* thin separator line under the white heading */}
        <div className="w-full border-t border-[#E4E4E7]"></div>


     
        {/* Light gray band that stretches across the full page */}
        <div className="w-full bg-[#F9FAFB] py-6">
          <div className="max-w-7xl mx-auto px-4">
            {/* --- controls row: tabs (left) + filter/search (right) --- */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              {/* Tabs — connected pill group */}
              <div className="inline-flex items-center gap-1 rounded-lg bg-[#F3F4F6] p-1">
                {/* All Flights */}
                <button
                  onClick={() => setFilterStatus("All")}
                  className={`px-4 py-1 rounded-md text-sm font-medium transition cursor-pointer ${
                    filterStatus === "All"
                      ? "bg-white text-black shadow-sm"
                      : "bg-transparent text-gray-500 hover:text-black"
                  }`}
                >
                  All Flights
                </button>

                {/* Landed */}
                <button
                  onClick={() => setFilterStatus("Landed")}
                  className={`px-4 py-1 rounded-md text-sm font-medium transition cursor-pointer ${
                    filterStatus === "Landed"
                      ? "bg-white text-black shadow-sm"
                      : "bg-transparent text-gray-500 hover:text-black"
                  }`}
                >
                  Landed
                </button>

                {/* On Time */}
                <button
                  onClick={() => setFilterStatus("On Time")}
                  className={`px-4 py-1 rounded-md text-sm font-medium transition cursor-pointer ${
                    filterStatus === "On Time"
                      ? "bg-white text-black shadow-sm"
                      : "bg-transparent text-gray-500 hover:text-black"
                  }`}
                >
                  On Time
                </button>

                {/* Early */}
                <button
                  onClick={() => setFilterStatus("Early")}
                  className={`px-4 py-1 rounded-md text-sm font-medium transition cursor-pointer ${
                    filterStatus === "Early"
                      ? "bg-white text-black shadow-sm"
                      : "bg-transparent text-gray-500 hover:text-black"
                  }`}
                >
                  Early
                </button>

                {/* Delayed */}
                <button
                  onClick={() => setFilterStatus("Delayed")}
                  className={`px-4 py-1 rounded-md text-sm font-medium transition cursor-pointer ${
                    filterStatus === "Delayed"
                      ? "bg-white text-black shadow-sm"
                      : "bg-transparent text-gray-500 hover:text-black"
                  }`}
                >
                  Delayed
                </button>
              </div>


              {/* Right side: filter + search */}
              <div className="flex items-center gap-3">
                <select
                  onChange={(e) => { const v = e.target.value; setQuery(v ? v : ""); }}
                  className="border rounded border-[#E4E4E7] px-3 py-2 text-sm bg-white cursor-pointer"
                  aria-label="Filter by Airline"
                >
                  <option value="">Filter by Airline</option>
                  <option value="JetBlue">JetBlue</option>
                  <option value="WestJet">WestJet</option>
                  <option value="Southwest">Southwest</option>
                </select>

                <div className="relative">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search flights..."
                    className="pl-10 pr-4 py-2 border border-[#E4E4E7] rounded-md text-sm w-64 bg-white"
                    aria-label="Search flights"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* ---- Table card (white) ---- */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Table header (light/darker gray) */}
              <div className="px-4 py-2" style={{ background: "#F3F4F6", borderBottom: "1px solid #E4E4E7" }}>
                <div className="grid grid-cols-6 text-sm font-semibold text-gray-500 uppercase gap-2">
                    <div>Flight</div>
                    <div>Origin</div>
                    <div className="text-center">Scheduled</div>
                    <div className="text-center">Estimated</div>
                    <div className="text-center">Status</div>
                    <div className="text-center">Gate</div>
                  </div>
              </div>

            {/* Table body */}
              <div>
                {visible.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">No flights matching your search.</div>
                ) : (
                  visible.map((f) => (
                    <div key={f.id} className="grid grid-cols-6 items-center gap-2 px-4 py-6 border-b"
                        style={{ borderColor: "#E4E4E7" }}>
                        <div>
                            <div className="font-semibold">{f.flight}</div>
                            <div className="text-xs text-gray-500">{f.airline}</div>
                        </div>
                        <div>{f.origin}</div>
                        <div className="text-center">{f.scheduled}</div>
                        <div className="text-center">{f.estimated}</div>
                        <div className="text-center">
                            <StatusPill status={f.status} />
                        </div>
                        <div className="text-center">{f.gate}</div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Two info cards below table */}        
            <div className="mt-12 mb-12 flex flex-col md:flex-row md:items-stretch md:gap-6">    
                <div className="bg-white rounded-lg p-6 shadow-md w-full md:w-[420px] min-h-[220px]">
                    <h4 className="font-semibold mb-2">Ground Transportation</h4>
                    <p className="text-sm text-gray-600 mb-4">
                    Taxis, shuttles, and rental cars are available outside the arrivals hall.
                    </p>
                    <a href="#" className="text-sm font-semibold hover:underline">
                    View transportation options →
                    </a>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md w-full md:w-[420px] min-h-[220px]">
                    <h4 className="font-semibold mb-2">Need Assistance?</h4>
                    <p className="text-sm text-gray-600 mb-4">
                    The Arrivals Information Desk is the main Information Desk for general airport information.
                    </p>
                    <div className="text-sm text-gray-700">Call: (876) 552-5533</div>
                    <div className="italic text-sm text-gray-700 mb-4">
                    (Between the hours of 8:00 a.m. and 6:00 p.m.)
                    </div>
                    <a href="#" className="text-sm font-semibold hover:underline">
                    View More Contact information →
                    </a>
                </div>
            
            </div>

            
          </div>
        </div>        
      </main>
    
  );
}
