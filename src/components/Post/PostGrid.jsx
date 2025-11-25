/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 10:31:04
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * src/components/Post/PostGrid.jsx
 * Renders cards in grid or masonry; defensive against missing props
 */
import React from "react";
import PostCard from "./PostCard";
import "../../styles/posts.css";

export default function PostGrid({
  posts = [],
  layout = "grid",
  favorites = [],
  onToggleFavorite = () => {},
  onDelete = () => {},
  onView = () => {},
  startIndex = 0, // used to compute global index
}) {
  if (!Array.isArray(posts) || posts.length === 0) {
    return <div className="text-gray-500">No posts found.</div>;
  }

  return (
    <div className={layout === "masonry" ? "masonry" : "grid-layout"}>
      {posts.map((post, i) => {
        const globalIndex = startIndex + i + 1;
        const isFav = favorites.includes(post.id);
        return (
          <PostCard
            key={post.id ?? globalIndex}
            post={post}
            index={globalIndex}
            isFavorited={isFav}
            onToggleFavorite={() => onToggleFavorite(post.id)}
            onDelete={() => onDelete(post.id)}
            onView={() => onView(post)}
          />
        );
      })}
    </div>
  );
}
