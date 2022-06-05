import { Worker } from "worker_threads";
import { cpus } from "os";

export const performCalculations = async () => {
  const runService = (workerData) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker("./src/wt/worker.js", { workerData });
      worker.on("message", (msg) => {
        resolve({ status: "resolve", data: msg });
      });
      worker.on("error", () => {
        reject({ status: "error", data: null });
      });
    });
  };

  const result = await Promise.all(
    Array(cpus().length)
      .fill(10)
      .map((value, index) => runService(value + index))
  );
  console.error(result);
};

performCalculations();
