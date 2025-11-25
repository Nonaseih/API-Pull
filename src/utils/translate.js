/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 20/11/2025 - 16:41:07
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export async function translateToEnglish(text) {
  const url = "https://translate.googleapis.com/translate_a/single";

  const params = new URLSearchParams({
    client: "gtx",
    sl: "auto",
    tl: "en",
    dt: "t",
    q: text,
  });

  const res = await fetch(`${url}?${params.toString()}`);
  const data = await res.json();

  return data[0].map((x) => x[0]).join("") || "Translation failed.";
}
