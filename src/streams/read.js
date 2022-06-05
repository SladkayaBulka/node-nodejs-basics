import { createReadStream } from "fs";

export const read = async () => {
  const stream = createReadStream("src/streams/files/fileToRead.txt");
  stream.pipe(process.stdout);
};

read();
