/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 08:26:19
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * CatCard.jsx — fixed for correct factObj usage
 */
export default function CatCard({
  factObj,
  index,
  isFavorite,
  onToggleFavorite,
  onDelete,
  onView
}) {
  return (
    <div className="square-card">

      {/* Top Row */}
      <div className="flex justify-between items-start">

        {/* NUMBER */}
        <div className="text-3xl font-black text-gray-300 select-none">
          {index}
        </div>

        {/* STAR */}
        <button className="square-card-btn" onClick={onToggleFavorite}>
          {isFavorite ? (
            <span className="text-yellow-400 text-xl">★</span>
          ) : (
            <span className="text-gray-400 text-xl">☆</span>
          )}
        </button>
      </div>

      {/* FACT TEXT */}
      <p className="mt-4 flex-1 text-gray-700 leading-snug">
        {factObj?.fact}
      </p>

      {/* FOOTER */}
      <div className="square-card-footer mt-4">

        {/* LENGTH */}
        <span className="text-xs text-gray-500">
          {factObj?.length} chars
        </span>

        {/* BUTTONS */}
        <div className="flex items-center gap-2">
          {/* VIEW */}
          <button
            className="px-3 py-1 bg-purple-600 text-white rounded-md"
            onClick={onView}
          >
            View
          </button>

          {/* DELETE */}
          <button
            className="square-card-btn text-red-500"
            onClick={onDelete}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
