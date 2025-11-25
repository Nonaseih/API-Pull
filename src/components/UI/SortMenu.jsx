/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 10:32:42
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function SortMenu({ value = "", onChange = () => {} }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="select-filter">
      <option value="">Sort By</option>
      <option value="id-asc">ID ↑</option>
      <option value="id-desc">ID ↓</option>
      <option value="title-asc">Title A→Z</option>
      <option value="title-desc">Title Z→A</option>
    </select>
  );
}
