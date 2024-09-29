import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
  const unzip = createUnzip();
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const readStream = createReadStream(join(__dirname, "files/archive.gz"));
  const writeStream = createWriteStream(
    join(__dirname, "files/fileToCompress.txt")
  );

  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
