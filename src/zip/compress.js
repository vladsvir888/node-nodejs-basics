import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const compress = async () => {
  const gzip = createGzip();
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const readStream = createReadStream(
    join(__dirname, "files/fileToCompress.txt")
  );
  const writeStream = createWriteStream(join(__dirname, "files/archive.gz"));

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
