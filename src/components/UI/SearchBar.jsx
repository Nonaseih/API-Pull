/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 00:58:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/UI/SearchBar.jsx
export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-md border bg-white">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-60">
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <input
        className="flex-1 bg-transparent outline-none text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search title or body..."
        aria-label="Search posts"
      />
    </div>
  );
}
