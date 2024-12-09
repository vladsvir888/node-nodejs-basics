import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";
import { createReadStream } from "fs";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = join(__dirname, "files/fileToCalculateHashFor.txt");
  const hash = createHash("sha256");
  const rstream = createReadStream(file);

  rstream.on("data", (chunk) => {
    hash.update(chunk);
  });

  rstream.on("end", () => {
    console.log(`SHA256 hash as hex: ${hash.digest("hex")}`);
  });

  rstream.on("error", (err) => {
    console.log(`Error: ${err.message}`);
  });
};

await calculateHash();
