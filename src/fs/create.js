import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { writeFile } from "fs/promises";
import { errorText, checkPathExist } from "../helpers/index.js";

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, "files/fresh.txt");

  const isFileExist = await checkPathExist(filePath);

  if (isFileExist) {
    throw new Error(errorText);
  }

  writeFile(filePath, "I am fresh and young");
};

await create();
