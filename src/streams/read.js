import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "fs";

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file = join(__dirname, "files/fileToRead.txt");
  const stream = createReadStream(file);

  stream.pipe(process.stdout);

  stream.on("error", (err) => {
    console.log(`Error: ${err.message}`);
  });
};

await read();
