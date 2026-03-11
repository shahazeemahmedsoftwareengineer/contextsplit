/**
 * lib/chunkFile.js
 * Core logic for splitting a text file into N balanced chunks.
 * Does NOT modify the content — only divides at natural line breaks.
 */

/**
 * Split raw text into `numChunks` balanced parts, breaking at line boundaries.
 *
 * @param {string} text       – Full file content
 * @param {number} numChunks  – Desired number of output chunks (1–50)
 * @returns {{ index: number, content: string, lines: number, chars: number }[]}
 */
export function splitTextIntoChunks(text, numChunks) {
  if (!text || numChunks < 1) return [];

  const lines      = text.split("\n");
  const totalLines = lines.length;
  const chunkSize  = Math.ceil(totalLines / numChunks);
  const chunks     = [];

  for (let i = 0; i < numChunks; i++) {
    const start = i * chunkSize;
    const end   = Math.min(start + chunkSize, totalLines);

    if (start >= totalLines) break; // fewer lines than requested chunks

    const content = lines.slice(start, end).join("\n");
    chunks.push({
      index:   i + 1,
      content,
      lines:   end - start,
      chars:   content.length,
    });
  }

  return chunks;
}

/**
 * Generate a download for a single chunk as a plain-text file.
 *
 * @param {string} content    – Chunk text
 * @param {string} filename   – e.g. "conversation_chunk_1_of_5.txt"
 */
export function downloadChunk(content, filename) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");

  a.href     = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Download all chunks as individual .txt files sequentially.
 *
 * @param {{ index: number, content: string }[]} chunks
 * @param {string} baseName – Original file name (without extension)
 */
export function downloadAllChunks(chunks, baseName) {
  const total    = chunks.length;
  const safeName = baseName.replace(/\.[^/.]+$/, "").replace(/[^a-z0-9_-]/gi, "_");

  chunks.forEach(({ index, content }) => {
    // Stagger downloads slightly so browsers don't block them
    setTimeout(() => {
      downloadChunk(content, `${safeName}_chunk_${index}_of_${total}.txt`);
    }, index * 300);
  });
}

/**
 * Format byte size to a human-readable string.
 *
 * @param {number} bytes
 * @returns {string}
 */
export function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k     = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i     = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}
