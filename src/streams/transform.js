import { Transform } from "stream";

const transform = async () => {
  const reverseTransformStream = new Transform({
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

  process.stdin.pipe(reverseTransformStream).pipe(process.stdout);
};

await transform();
