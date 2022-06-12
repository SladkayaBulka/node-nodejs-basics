import { parseArgv } from "./helpers/parse-argv";
import * as readline from "readline";

const parse_argv = parseArgv()



export const exit = async () => {
  try {
    console.log(`Thank you for using File Manager, ${parse_argv.username}!`);
    process.exit();
  } catch (error) {
    throw new Error("Operation failed");
  }
};

export const catchExit = () => {
  process.stdin.setRawMode(true);
  readline.emitKeypressEvents(process.stdin);
  process.stdin.on("keypress", (_, key) => {
    if (key.ctrl && key.name === "c") {
      console.log(`Thank you for using File Manager, ${parse_argv.username}!`);
      process.exit();
    }
  });
};
