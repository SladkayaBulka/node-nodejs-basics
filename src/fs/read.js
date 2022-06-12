import { readFile } from "fs/promises";

export const read = async () => {
  const files_folder = "src/fs/files";
  try {
    const file_data = await readFile(`${files_folder}/fileToRead.txt`, "utf-8");
    console.log(file_data);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

read();
