// src/components/UI/LayoutToggle.jsx
export default function LayoutToggle({ mode, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange("masonry")}
        className={`px-3 py-1 rounded-md text-sm ${mode === "masonry" ? "bg-black text-white" : "bg-white border"}`}
        aria-pressed={mode === "masonry"}
      >
        Masonry
      </button>

      <button
        onClick={() => onChange("grid")}
        className={`px-3 py-1 rounded-md text-sm ${mode === "grid" ? "bg-black text-white" : "bg-white border"}`}
        aria-pressed={mode === "grid"}
      >
        Grid
      </button>
    </div>
  );
}
