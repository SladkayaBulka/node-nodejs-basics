import crypto from "crypto";
import { readFile } from "fs/promises";

export const calculateHash = async () => {
  const file_data = await readFile("src/hash/files/fileToCalculateHashFor.txt");
  console.error(crypto.createHash("sha256").update(file_data).digest("hex"));
};

calculateHash();
