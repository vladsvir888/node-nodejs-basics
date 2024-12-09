import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { copyFile, mkdir, readdir } from "fs/promises";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filesPath = join(__dirname, "files");
  const filesCopyPath = join(__dirname, "files_copy");

  try {
    const files = await readdir(filesPath);

    await mkdir(filesCopyPath);

    for (const file of files) {
      const fileFromFiles = join(filesPath, file);
      const fileFromFilesCopy = join(filesCopyPath, file);

      await copyFile(fileFromFiles, fileFromFilesCopy);
    }
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
