import { writeFile } from "fs/promises";

export const create = async () => {
  const files_folder = "src/fs/files";
  try {
    await writeFile(`${files_folder}/fresh.txt`, "I am fresh and young", {
      flag: "wx",
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

create();
