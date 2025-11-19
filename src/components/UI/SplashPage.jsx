/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 10:44:28
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function SplashPage({ onContinue }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "64px", fontWeight: "900", marginBottom: "20px" }}>
        POSTS
      </h1>

      <p style={{ fontSize: "18px", maxWidth: "400px", opacity: 0.8 }}>
        Explore a curated collection of 100 posts. Search, filter, translate and
        discover.
      </p>

      <button
        onClick={onContinue}
        style={{
          marginTop: "30px",
          padding: "12px 32px",
          background: "white",
          color: "black",
          borderRadius: "999px",
          fontWeight: "600",
          fontSize: "18px",
          border: "none",
          cursor: "pointer",
        }}
      >
        View Posts
      </button>
    </div>
  );
}
