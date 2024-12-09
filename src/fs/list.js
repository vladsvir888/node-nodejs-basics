import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readdir } from "fs/promises";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filesPath = join(__dirname, "files");

  try {
    const files = await readdir(filesPath);
    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
