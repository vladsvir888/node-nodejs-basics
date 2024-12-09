import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const tstream = new Transform({
    transform(chunk, encoding, callback) {
      const transformedData = chunk
        .toString()
        .trim()
        .split("")
        .reverse()
        .join("");

      this.push(transformedData);

      callback();
    },
  });

  await pipeline(process.stdin, tstream, process.stdout);
};

await transform();
