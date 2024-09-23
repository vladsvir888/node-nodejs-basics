import { argv } from "process";

const parseArgs = () => {
  const result = argv
    .reduce((acc, current, index) => {
      if (current.startsWith("--")) {
        acc.push(`${current.slice(2)} is ${argv[index + 1]}`);
      }
      return acc;
    }, [])
    .join(", ");

  console.log(result);
};

parseArgs();
