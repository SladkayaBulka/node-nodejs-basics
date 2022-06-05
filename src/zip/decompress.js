import { createWriteStream, createReadStream } from "fs";
import { createGunzip } from "zlib";

export const decompress = async () => {
  const readable_stream = createReadStream("src/zip/files/archive.gz");
  const writeable_stream = createWriteStream(
    "src/zip/files/fileToCompress.txt"
  );
  const unzip = createGunzip();
  readable_stream.pipe(unzip).pipe(writeable_stream);
};

decompress();
