import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { writeFile } from "fs/promises";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files/fresh.txt");

  try {
    await writeFile(filePath, "I am fresh and young", { flag: "wx" });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
