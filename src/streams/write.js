import { createWriteStream } from "fs";

export const write = async () => {
  const stream = createWriteStream("src/streams/files/fileToWrite.txt");
  process.stdin.pipe(stream);
};

write();
