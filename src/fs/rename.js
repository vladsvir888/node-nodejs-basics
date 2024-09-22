import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { rename as fsRename } from "fs/promises";
import { errorText, checkPathExist } from "../helpers/index.js";

const rename = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const oldFilePath = join(__dirname, "files/wrongFilename.txt");
  const newFilePath = join(__dirname, "files/properFilename.md");

  if (
    !(await checkPathExist(oldFilePath)) ||
    (await checkPathExist(newFilePath))
  ) {
    throw new Error(errorText);
  }

  await fsRename(oldFilePath, newFilePath);
};

await rename();
