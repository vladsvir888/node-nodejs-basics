import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readdir, writeFile } from "fs/promises";

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filesPath = join(__dirname, "files");
  const files = await readdir(filesPath);

  if (files.includes("fresh.txt")) {
    throw new Error("FS operation failed");
  }

  writeFile(join(filesPath, "fresh.txt"), "I am fresh and young");
};

await create();
