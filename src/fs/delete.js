import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { rm } from "fs/promises";
import { errorText, checkPathExist } from "../helpers/index.js";

const remove = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, "files/fileToRemove.txt");

  if (!(await checkPathExist(filePath))) {
    throw new Error(errorText);
  }

  rm(filePath);
};

await remove();
