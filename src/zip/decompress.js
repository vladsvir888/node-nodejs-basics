import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const rstream = createReadStream(join(__dirname, "files/archive.gz"));
  const wstream = createWriteStream(
    join(__dirname, "files/fileToCompress.txt")
  );

  await pipeline(rstream, createUnzip(), wstream);
};

await decompress();
