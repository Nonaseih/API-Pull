/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 10:31:41
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * src/components/Post/PostCard.jsx
 * Professional card. Number at top-left, star top-right, view and delete
 */
import { motion } from "framer-motion";

export default function PostCard({
  post = {},
  index = 0,
  isFavorited = false,
  onToggleFavorite = () => {},
  onDelete = () => {},
  onView = () => {},
}) {
  const title = post.title || "Untitled";
  const body = post.body || "";

  return (
    <motion.article
      layout
      whileHover={{ y: -6, boxShadow: "0 16px 36px rgba(15,23,42,0.12)" }}
      className="card glass-card post-card"
      aria-labelledby={`post-${post.id ?? index}-title`}
      role="article"
    >
      <div className="post-card-top">
        <div className="post-number">{index}</div>

        <button
          aria-pressed={isFavorited}
          onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}
          title={isFavorited ? "Unfavorite" : "Favorite"}
          className="post-action-btn star"
        >
          <span className={isFavorited ? "fav" : "not-fav"}>{isFavorited ? "★" : "☆"}</span>
        </button>
      </div>

      <div className="post-main">
        <h3 id={`post-${post.id ?? index}-title`} className="post-title">{title}</h3>
        <p className="post-body line-clamp-6">{body}</p>
      </div>

      <div className="post-footer">
        <div className="meta">
          <span className="meta-user">User {post.userId ?? "—"}</span>
          <span className="meta-length">{Math.max(body.length, 0)} chars</span>
        </div>

        <div className="actions">
          <button
            onClick={(e) => { e.stopPropagation(); onView(); }}
            className="btn view-btn"
            title="View"
          >
            View
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="btn delete-btn"
            title="Remove (temporary)"
          >
            ✕
          </button>
        </div>
      </div>
    </motion.article>
  );
}
