import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readdir } from "fs/promises";
import { errorText, checkPathExist } from "../helpers/index.js";

const list = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filesPath = join(__dirname, "files");

  if (!(await checkPathExist(filesPath))) {
    throw new Error(errorText);
  }

  console.log(await readdir(filesPath));
};

await list();
