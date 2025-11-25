/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 20/11/2025 - 16:40:14
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function CatList({ facts, page, onDelete }) {
  return (
    <div className="masonry">
      {facts.map((fact, i) => (
        <CatCard
          key={i + page * 100}
          fact={fact}
          index={i + 1}
          onDelete={() => onDelete(i)}
        />
      ))}
    </div>
  );
}
