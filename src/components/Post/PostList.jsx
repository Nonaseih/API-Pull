/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 20/11/2025 - 16:43:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * PostList.jsx — maps posts to PostCard
 */
import PostCard from "./PostCard"; // ✅ FIX: import added

export default function PostList({ posts, page, perPage, onView }) {
  if (!posts || posts.length === 0) {
    return <p className="text-gray-500">No posts available.</p>;
  }

  return (
    <div className="masonry">
      {posts.map((post, i) => (
        <PostCard
          key={post.id}
          post={post}
          index={i + 1 + (page - 1) * perPage}
          onView={onView}
        />
      ))}
    </div>
  );
}
