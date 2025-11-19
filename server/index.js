/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 00:32:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/translate", async (req, res) => {
  try {
    const text = req.body.text;

    const url = "https://translate.googleapis.com/translate_a/single";
    const params = new URLSearchParams({
      client: "gtx",
      sl: "auto",
      tl: "en",
      dt: "t",
      q: text,
    });

    const response = await fetch(`${url}?${params.toString()}`);
    const data = await response.json();

    const translated = data[0].map((t) => t[0]).join("");

    res.json({ translated });
  } catch (err) {
    console.error(err);
    res.json({ translated: "Translation failed." });
  }
});

app.listen(3001, () => console.log("Google Proxy running on port 3001"));
