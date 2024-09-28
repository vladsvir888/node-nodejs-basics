import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createWriteStream } from "fs";

const write = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file = join(__dirname, "files/fileToWrite.txt");
  const stream = createWriteStream(file);

  process.stdin.pipe(stream);

  stream.on("error", (err) => {
    console.log(`Error: ${err.message}`);
  });
};

await write();
