import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createWriteStream } from "fs";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = join(__dirname, "files/fileToWrite.txt");

  const wstream = createWriteStream(file);

  process.stdin.pipe(wstream);

  wstream.on("error", (err) => {
    console.log(`Error: ${err.message}`);
  });
};

await write();
