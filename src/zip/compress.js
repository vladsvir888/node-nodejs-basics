import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const rstream = createReadStream(join(__dirname, "files/fileToCompress.txt"));
  const wstream = createWriteStream(join(__dirname, "files/archive.gz"));

  await pipeline(rstream, createGzip(), wstream);
};

await compress();
