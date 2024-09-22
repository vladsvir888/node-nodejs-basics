import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { copyFile, mkdir, readdir } from "fs/promises";
import { errorText, checkPathExist } from "../helpers/index.js";

const copy = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filesPath = join(__dirname, "files");
  const filesCopyPath = join(__dirname, "files_copy");

  const isFilesDirExist = await checkPathExist(filesPath);

  if (!isFilesDirExist) {
    throw new Error(errorText);
  }

  const isFilesCopyDirExist = await checkPathExist(filesCopyPath);

  if (isFilesCopyDirExist) {
    throw new Error(errorText);
  }

  await mkdir(filesCopyPath);

  const files = await readdir(filesPath);

  for (const file of files) {
    await copyFile(join(filesPath, file), join(filesCopyPath, file));
  }
};

await copy();
