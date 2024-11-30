import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files/fileToRead.txt");

  try {
    const content = await readFile(filePath, { encoding: "utf8" });
    console.log(content);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
