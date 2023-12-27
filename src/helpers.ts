import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export const streamToBlob = (
  stream: NodeJS.ReadableStream,
  mimeType: string | null
) => {
  if (mimeType != null && typeof mimeType !== "string") {
    throw new Error("Invalid mimetype, expected string.");
  }
  return new Promise<Blob>((resolve, reject) => {
    const chunks: any = [];
    stream
      .on("data", (chunk) => chunks.push(chunk))
      .once("end", () => {
        const blob =
          mimeType != null
            ? new Blob(chunks, { type: mimeType })
            : new Blob(chunks);
        resolve(blob);
      })
      .once("error", reject);
  });
};
