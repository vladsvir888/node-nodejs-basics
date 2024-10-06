import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "fs";
import { Transform } from "stream";

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file = join(__dirname, "files/fileToRead.txt");
  const stream = createReadStream(file);

  const newLineStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(`${chunk}\n`);
      callback();
    },
  });

  stream.pipe(newLineStream).pipe(process.stdout);

  stream.on("error", (err) => {
    console.log(`Error: ${err.message}`);
  });
};

await read();
