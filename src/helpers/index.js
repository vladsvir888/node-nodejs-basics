import { stat } from "fs/promises";

export const checkPathExist = async (path) => {
  try {
    return !!(await stat(path));
  } catch (error) {
    return false;
  }
};

export const errorText = "FS operation failed";
