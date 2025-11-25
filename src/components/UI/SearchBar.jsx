/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 10:32:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * simple search input
 */
export default function SearchBar({ value = "", onChange = () => {} }) {
  return (
    <input
      className="search-input"
      placeholder="Search title or body..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
