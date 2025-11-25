/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 03:32:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/Cats/CatMasonry.jsx
import CatCard from "./CatCard";

export default function CatMasonry({
  facts = [],
  favorites = [],
  onToggleFavorite,
  onDelete,
  onView,
}) {
  return (
    <div className="masonry">
      {facts.map((fact, i) => {
        const id = i + 1;
        const isFavorite = favorites.includes(id);

        return (
          <CatCard
            key={id}
            fact={fact}
            index={id}
            isFavorite={isFavorite}
            onToggleFavorite={() => onToggleFavorite(id)}
            onDelete={() => onDelete(id)}
            onView={() => onView(fact)}
          />
        );
      })}
    </div>
  );
}
