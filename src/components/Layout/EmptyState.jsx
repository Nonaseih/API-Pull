/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 18/11/2025 - 23:54:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/EmptyState.jsx
export default function EmptyState({ text = "No results found." }) {
  return (
    <div className="py-12 text-center text-gray-500 dark:text-gray-400">
      {text}
    </div>
  );
}
