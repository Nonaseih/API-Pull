/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 20/11/2025 - 16:39:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function PostModal({ open, post, translated, loading, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl p-6 w-full max-w-xl relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-2xl">
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-3">{post.title}</h2>

        <p className="mb-3 text-gray-700">
          <strong>Original:</strong> {post.body}
        </p>

        <p className="p-3 bg-gray-100 rounded-lg min-h-[80px]">
          <strong>Translation:</strong><br />
          {loading ? "Translating..." : translated}
        </p>
      </div>
    </div>
  );
}
