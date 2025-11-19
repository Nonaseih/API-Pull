/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 00:58:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/UI/SortMenu.jsx
export default function SortMenu({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 rounded-md border bg-white text-sm"
      aria-label="Sort posts"
    >
      <option value="">Sort By</option>
      <option value="title-asc">Title A → Z</option>
      <option value="title-desc">Title Z → A</option>
      <option value="id-asc">ID Asc</option>
      <option value="id-desc">ID Desc</option>
    </select>
  );
}
