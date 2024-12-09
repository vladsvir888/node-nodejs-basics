import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "fs";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = join(__dirname, "files/fileToRead.txt");

  const rstream = createReadStream(file);

  rstream.on("data", (chunk) => {
    console.log(chunk.toString());
  });

  rstream.on("error", (err) => {
    console.log(`Error: ${err.message}`);
  });
};

await read();
