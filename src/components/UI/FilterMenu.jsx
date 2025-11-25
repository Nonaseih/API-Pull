/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 10:42:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * FilterMenu.jsx — fully safe version
 */
export default function FilterMenu({ posts = [], value = "", onChange = () => {} }) {
  const safePosts = Array.isArray(posts) ? posts : (posts?.posts ?? []);

  const users = Array.from(
    new Set(
      safePosts
        .map((p) => p?.userId)
        .filter((id) => id !== null && id !== undefined)
    )
  ).sort((a, b) => a - b);

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="select-filter"
    >
      <option value="">All Users</option>

      {users.map((u) => (
        <option key={u} value={u}>
          User {u}
        </option>
      ))}
    </select>
  );
}
