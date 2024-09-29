import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const child = spawn("node", [join(__dirname, "files/script.js"), ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess(["someArgument1", "someArgument2"]);
