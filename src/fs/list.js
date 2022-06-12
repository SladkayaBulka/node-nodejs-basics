import { readdir } from "fs/promises";
export const list = async () => {
  const files_folder = "src/fs/files";
  try {
    const file_names = await readdir(files_folder);
    console.log(file_names);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

list();
