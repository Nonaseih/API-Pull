/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 08:23:26
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * CatGrid.jsx — fully fixed + modal-ready
 */
import React from "react";
import CatCard from "./CatCard";

export default function CatGrid({
  facts = [],
  page = 1,
  favorites = [],
  onToggleFavorite,
  onDelete,
  onView
}) {
  return (
    <div className="square-grid">
      {facts.map((factObj, i) => {
        const globalIndex = (page - 1) * 10 + (i + 1);   // Correct index per API page
        const isFav = favorites.includes(globalIndex);

        return (
          <CatCard
            key={globalIndex}
            factObj={factObj}
            index={globalIndex}
            isFavorite={isFav}
            onToggleFavorite={() => onToggleFavorite(globalIndex)}
            onDelete={() => onDelete(globalIndex)}
            onView={() =>
              onView({
                ...factObj,
                index: globalIndex,
                img: `https://cataas.com/cat?${Math.random()}`
              })
            }
          />
        );
      })}
    </div>
  );
}
