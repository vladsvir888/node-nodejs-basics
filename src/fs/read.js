import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
import { errorText, checkPathExist } from "../helpers/index.js";

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, "files/fileToRead.txt");

  if (!(await checkPathExist(filePath))) {
    throw new Error(errorText);
  }

  console.log(await readFile(filePath, { encoding: "utf8" }));
};

await read();
