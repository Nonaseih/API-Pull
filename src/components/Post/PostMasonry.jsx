/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 12:06:14
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * PostMasonry.jsx — passes favorites + toggle handler
 */
import { motion, AnimatePresence } from "framer-motion";
import PostCard from "./PostCard";
import "../../styles/masonry.css";

const containerVariants = {
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function PostMasonry({
  posts,
  openModal,
  page,
  perPage,
  favorites,
  onFavoriteChange,
}) {
  if (!posts || posts.length === 0) {
    return <p className="text-gray-500">No posts found.</p>;
  }

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="masonry"
      >
        {posts.map((post, i) => {
          const index = i + 1 + (page - 1) * perPage;
          const isFavorited = favorites.includes(post.id);

          return (
            <motion.div key={post.id} variants={itemVariants}>
              <PostCard
                post={post}
                index={index}
                openModal={openModal}
                isFavorited={isFavorited}
                onFavoriteChange={onFavoriteChange}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
