/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 00:58:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/UI/Pagination.jsx
export default function Pagination({ current, totalPages, onChange }) {
  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-40"
      >
        Prev
      </button>
      <span className="text-sm">Page {current} / {totalPages}</span>
      <button
        onClick={() => onChange(Math.min(totalPages, current + 1))}
        disabled={current === totalPages}
        className="px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
