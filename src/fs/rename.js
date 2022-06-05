import { rename as fs_rename } from "fs/promises";

export const rename = async () => {
  const files_folder = "src/fs/files";
  try {
    await fs_rename(
      `${files_folder}/wrongFilename.txt`,
      `${files_folder}/properFilename.md`
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

rename();
