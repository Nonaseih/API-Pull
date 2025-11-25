/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 20/11/2025 - 14:12:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function PostCard({ post, index, onView }) {
  return (
    <article className="card masonry-item p-6 rounded-xl shadow">
      <div className="text-4xl font-bold text-gray-300 mb-4">{index}</div>

      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.body}</p>

      <button
        onClick={() => onView(post)}
        className="w-full bg-black text-white py-2 rounded-md font-semibold hover:opacity-90"
      >
        View
      </button>
    </article>
  );
}
