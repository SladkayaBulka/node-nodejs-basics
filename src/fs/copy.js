import { copyFile, readdir, mkdir } from "fs/promises";

export const copy = async () => {
  const files_folder = "src/fs/files";
  const files_copy_folder = "src/fs/files_copy";

  try {
    await mkdir(files_copy_folder);
    const file_names = await readdir(files_folder);
    for (const file_name of file_names) {
      await copyFile(
        `${files_folder}/${file_name}`,
        `${files_copy_folder}/${file_name}`
      );
    }
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

copy();
