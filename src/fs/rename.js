import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { rename as rn } from "fs/promises";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const oldFilePath = join(__dirname, "files/wrongFilename.txt");
  const newFilePath = join(__dirname, "files/properFilename.md");

  try {
    await rn(oldFilePath, newFilePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
