/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 01:18:43
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * src/components/Post/PostMasonry.jsx
 * Supports global numbering
 */
import PostCard from "./PostCard";
import "../../styles/masonry.css";

export default function PostMasonry({ posts, openModal, page, perPage }) {
  return (
    <div className="masonry">
      {posts.map((p, i) => (
        <PostCard
          key={p.id}
          post={p}
          index={(page - 1) * perPage + i}  // GLOBAL INDEX
          openModal={openModal}
        />
      ))}
    </div>
  );
}
