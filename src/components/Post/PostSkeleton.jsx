/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 18/11/2025 - 23:54:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/Post/PostSkeleton.jsx
export default function PostSkeleton() {
  return (
    <div className="card glass-card animate-pulse">
      <div className="h-4 w-3/4 bg-gray-300 rounded mb-3" />
      <div className="h-3 w-full bg-gray-300 rounded mb-2" />
      <div className="h-3 w-full bg-gray-300 rounded mb-2" />
    </div>
  );
}
