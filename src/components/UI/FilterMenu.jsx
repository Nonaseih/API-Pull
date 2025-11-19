/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 00:58:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/UI/FilterMenu.jsx
export default function FilterMenu({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 rounded-md border bg-white text-sm"
      aria-label="Filter by user"
    >
      <option value="">All Users</option>
      {[...Array(10)].map((_, i) => (
        <option key={i} value={i + 1}>
          User {i + 1}
        </option>
      ))}
    </select>
  );
}
