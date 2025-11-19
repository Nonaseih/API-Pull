/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 00:28:29
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export async function translateToEnglish(text) {
  try {
    const res = await fetch("http://localhost:3001/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });

    const data = await res.json();

    return data.translated || "Translation failed.";
  } catch (err) {
    console.error("Translation error:", err);
    return "Translation failed.";
  }
}
