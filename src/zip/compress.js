import { createWriteStream, createReadStream } from "fs";
import { createGzip } from "zlib";

export const compress = async () => {
  const readable_stream = createReadStream("src/zip/files/fileToCompress.txt");
  const writeable_stream = createWriteStream("src/zip/files/archive.gz");
  const gzip = createGzip();
  readable_stream.pipe(gzip).pipe(writeable_stream);
};

compress();
