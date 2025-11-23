export default function StatusPill({ status }) {
  // Colour based on the status text
  const colorClass =
    status === "Landed" ? "bg-green-100 text-green-700" :
    status === "On Time" ? "bg-blue-100 text-blue-700" :
    status === "Early" ? "bg-amber-100 text-amber-700" :
    status === "Delayed" ? "bg-red-100 text-red-700" :
    "bg-gray-100 text-gray-700";

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium min-w-[80px] ${colorClass}`}>
      {status}
    </span>
  );
}
