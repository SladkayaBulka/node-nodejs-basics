import { unlink } from "fs/promises";

export const remove = async () => {
  const files_folder = "src/fs/files";
  try {
    await unlink(`${files_folder}/fileToRemove.txt`);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

remove();
