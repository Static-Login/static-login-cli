#!/usr/bin/env node
import figlet from "figlet";
import axios from "axios";
import { __dirname, streamToBlob } from "./helpers";
import path from "node:path";
import tar from "tar";

console.log(figlet.textSync("Static Login"));

export const main = async () => {
  const formData = new FormData();
  const directoryToTar = path.join(__dirname, "..", "testDir");
  console.log(directoryToTar);
  const tarStream = tar.create(
    {
      C: directoryToTar,
    },
    ["."]
  );
  const file = await streamToBlob(tarStream, null);

  formData.append("file", new Blob([file]), "tarball.tgz");

  await axios.post("http://localhost:3000/api/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

await main();
