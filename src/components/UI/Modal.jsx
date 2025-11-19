/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 00:57:08
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/UI/Modal.jsx
export default function Modal({ open, onClose, post, translated, loading }) {
  if (!open || !post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-[90%] max-w-xl p-6 rounded-xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black text-xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-3 text-gray-900">{post.title}</h2>

        <p className="text-sm text-gray-700 mb-4"><strong>Original:</strong> {post.body}</p>

        <div className="p-3 rounded bg-gray-100">
          <strong className="text-gray-900">Translation:</strong>
          <p className="mt-1 text-sm text-gray-800">
            {loading ? "Translating..." : translated}
          </p>
        </div>
      </div>
    </div>
  );
}
