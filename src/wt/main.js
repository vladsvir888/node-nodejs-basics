import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const cpuCores = os.cpus();
  const start = 10;
  const end = start + cpuCores.length;

  const workers = [];

  for (let i = start; i < end; i += 1) {
    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(join(__dirname, "worker.js"), {
          workerData: i,
        });

        worker.on("message", (data) => resolve({ status: "resolved", data }));
        worker.on("error", () => resolve({ status: "error", data: null }));
        worker.on("exit", (code) => {
          if (code !== 0) {
            reject(new Error(`Worker stopped with exit code ${code}`));
          }
        });
      })
    );
  }

  Promise.all(workers).then((response) => console.log(response));
};

await performCalculations();
