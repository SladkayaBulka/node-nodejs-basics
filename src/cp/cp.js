import { spawn } from "child_process";

export const spawnChildProcess = async (args) => {
  const child = spawn("node", ["./src/cp/files/script.js", args]);
  child.stdout.pipe(process.stdout);
  process.stdout.pipe(child.stdin);
};

spawnChildProcess("--test 25");
