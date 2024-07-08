import axios from "axios";
import { createHash } from "crypto";
import { JSDOM } from "jsdom";
import dotenv from "dotenv";

dotenv.config();

const cookieString = process.env.COOKIE;

async function getMessage() {
  try {
    const res = await axios.get("http://challenges.ringzer0ctf.com:10013", {
      headers: { Cookie: cookieString },
      timeout: 4269,
    });
    const dom = new JSDOM(res.data);
    const element = dom.window.document.querySelector(".message");
    return element.textContent
      .split("\n")
      .map(line => line.trim())
      .filter(line => line)[1];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const hashMsg = () =>
  getMessage().then(msg => createHash("sha512").update(msg).digest("hex"));

async function getFlag() {
  try {
    const hash = await hashMsg();
    const res = await axios.get(
      `http://challenges.ringzer0team.com:10013/?r=${hash}`
    );
    const dom = new JSDOM(res.data);
    const element = dom.window.document.querySelector(".alert");
    if (!element) throw new Error("flag element not found");
    return element.textContent;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

getFlag()
  .then(flag => console.log(flag))
  .catch(error => console.error("Error:", error));
