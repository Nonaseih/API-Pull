/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 24/11/2025 - 13:31:36
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

/* -----------------------------
   GOOGLE TRANSLATE PROXY
----------------------------- */
app.post("/api/translate", async (req, res) => {
  const { title, body } = req.body;

  try {
    const translate = async (text) => {
      const url = "https://translate.googleapis.com/translate_a/single";
      const params = new URLSearchParams({
        client: "gtx",
        sl: "auto",
        tl: "en",
        dt: "t",
        q: text
      });

      const response = await fetch(`${url}?${params.toString()}`);
      const json = await response.json();
      return json[0].map((t) => t[0]).join("");
    };

    const translatedTitle = await translate(title);
    const translatedBody = await translate(body);

    res.json({ title: translatedTitle, body: translatedBody });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Translation failed" });
  }
});

/* -----------------------------
   CAT FACTS PROXY
----------------------------- */
app.get("/api/catfacts", async (req, res) => {
  const page = req.query.page || 1;

  try {
    const apiRes = await fetch(`https://catfact.ninja/facts?page=${page}`);
    const data = await apiRes.json();
    res.json(data);
  } catch (err) {
    console.error("Cat API error:", err);
    res.status(500).json({ error: "Failed to load cat facts" });
  }
});

app.listen(5000, () => console.log("API running at http://localhost:5000"));
