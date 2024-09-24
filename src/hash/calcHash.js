import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";
import { createReadStream } from "fs";

const calculateHash = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file = join(__dirname, "files/fileToCalculateHashFor.txt");
  const hash = createHash("sha256");
  const stream = createReadStream(file);

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    console.log(`SHA256 hash as hex: ${hash.digest("hex")}`);
  });

  stream.on("error", (err) => {
    console.log(`Error: ${err.message}`);
  });
};

await calculateHash();
