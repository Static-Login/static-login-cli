#!/usr/bin/env node
import figlet from "figlet";
import axios from "axios";
import fs from "node:fs";
import { __dirname } from "./helpers";
import path from "node:path";
import AdmZip from "adm-zip";

console.log(figlet.textSync("Static Login"));

export const main = async () => {
  const formData = new FormData();
  const directoryToZip = path.join(__dirname, "..", "testDist");
  const zip = new AdmZip();
  const outputFile = "site.zip";
  zip.addLocalFolder(directoryToZip);
  zip.writeZip(outputFile);
  const outputPath = path.join(__dirname, "..");
  console.log(outputPath);

  const file = fs.readFileSync(path.join(outputPath, outputFile));

  formData.append("file", new Blob([file]), outputFile);

  await axios.post("http://localhost:3000/api/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

await main();
