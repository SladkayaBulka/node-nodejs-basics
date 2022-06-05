import { Transform } from "stream";

export const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, _, callback) {
      callback(null, String(chunk).split("").reverse().join("") + "\n");
    },
  });
  process.stdin.pipe(reverseText).pipe(process.stdin);
};

transform();
