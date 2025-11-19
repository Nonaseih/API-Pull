/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 11:24:43
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/UI/DetailModal.jsx
export default function DetailModal({ open, onClose, post }) {
  if (!open || !post) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      <div
        className="bg-white w-[95%] max-w-2xl rounded-xl p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-700">✕</button>

        <h2 className="text-2xl font-bold mb-3">
          {post.title}
        </h2>

        <p className="text-sm text-gray-700 mb-4">
          {post.body}
        </p>

        <div className="mt-4 flex gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-black text-white rounded-md">Close</button>
        </div>
      </div>
    </div>
  );
}
