import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { rm } from "fs/promises";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files/fileToRemove.txt");

  try {
    await rm(filePath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
