"use client";
import { useState, useRef, useCallback } from "react";
import { splitTextIntoChunks, downloadChunk, formatBytes } from "@/lib/chunkFile";
import DownloadBanner from "./DownloadBanner";

export default function ChunkTool() {
  const [file,          setFile]          = useState(null);
  const [fileContent,   setFileContent]   = useState("");
  const [numChunks,     setNumChunks]     = useState(5);
  const [chunks,        setChunks]        = useState([]);
  const [isDragging,    setIsDragging]    = useState(false);
  const [isProcessing,  setIsProcessing]  = useState(false);
  const [isZipping,     setIsZipping]     = useState(false);
  const fileInputRef = useRef(null);

  const readFile = useCallback((selectedFile) => {
    if (!selectedFile) return;
    const validExts = [".txt",".md",".log",".text",".csv"];
    const ext = selectedFile.name.slice(selectedFile.name.lastIndexOf(".")).toLowerCase();
    if (!validExts.includes(ext) && selectedFile.type && !selectedFile.type.startsWith("text")) {
      alert("Please upload a plain text file (.txt, .md, .log)");
      return;
    }
    setFile(selectedFile);
    setChunks([]);
    const reader = new FileReader();
    reader.onload  = e => setFileContent(e.target.result);
    reader.onerror = () => alert("Could not read file. Please try again.");
    reader.readAsText(selectedFile, "UTF-8");
  }, []);

  const onDragOver  = e => { e.preventDefault(); setIsDragging(true);  };
  const onDragLeave = ()  => setIsDragging(false);
  const onDrop      = e  => {
    e.preventDefault(); setIsDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) readFile(f);
  };

  const handleGenerate = () => {
    if (!fileContent) return;
    setIsProcessing(true);
    setTimeout(() => {
      setChunks(splitTextIntoChunks(fileContent, numChunks));
      setIsProcessing(false);
    }, 400);
  };

  const handleDownloadZip = async () => {
    if (!chunks.length) return;
    setIsZipping(true);
    try {
      const JSZip    = (await import("jszip")).default;
      const zip      = new JSZip();
      const total    = chunks.length;
      const safeName = file.name.replace(/\.[^/.]+$/,"").replace(/[^a-z0-9_-]/gi,"_");
      chunks.forEach(({ index, content }) => {
        zip.file(`${safeName}_chunk_${index}_of_${total}.txt`, content);
      });
      const blob = await zip.generateAsync({ type:"blob" });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement("a");
      a.href = url; a.download = `${safeName}_all_${total}_chunks.zip`;
      document.body.appendChild(a); a.click();
      document.body.removeChild(a); URL.revokeObjectURL(url);
    } catch { alert("Failed to create ZIP. Try downloading individually."); }
    finally   { setIsZipping(false); }
  };

  const handleReset = () => {
    setFile(null); setFileContent(""); setChunks([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const sliderStyle = { "--progress": `${((numChunks - 2) / (100 - 2)) * 100}%` };

  return (
    <section id="tool" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
      style={{background:"linear-gradient(180deg,#fafafa 0%,#f4efff22 50%,#fdf0ed22 100%)"}}
      aria-labelledby="tool-heading">

      <div className="blob w-48 h-48 sm:w-72 sm:h-72 top-10 right-0 opacity-25" style={{background:"#f4efff"}} aria-hidden="true"/>
      <div className="blob w-40 h-40 sm:w-56 sm:h-56 bottom-0 left-0 opacity-20" style={{background:"#fdf0ed",animationDelay:"3s"}} aria-hidden="true"/>

      <div className="section-container relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <p className="section-label">
            <span className="w-4 h-px bg-brand-purple inline-block"/>The Tool<span className="w-4 h-px bg-brand-purple inline-block"/>
          </p>
          <h2 id="tool-heading" className="section-title text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
            Split your conversation{" "}
            <span className="text-brand-purple">right here</span>
          </h2>
          <p className="font-body text-brand-muted text-base sm:text-lg max-w-xl mx-auto px-2">
            Everything happens in your browser. We never see, store, or send your file anywhere.
          </p>
        </div>

        {/* Tool Card */}
        <div className="glass-card max-w-3xl mx-auto p-5 sm:p-8 md:p-10">

          <DownloadBanner />

          {/* Step 1 */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-charcoal flex items-center justify-center text-white text-xs font-bold flex-shrink-0">1</span>
              <h3 className="font-display font-bold text-base sm:text-lg text-brand-charcoal">Upload your conversation file</h3>
            </div>

            {!file ? (
              <div
                className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-8 sm:p-12 flex flex-col items-center justify-center gap-3 sm:gap-4 cursor-pointer transition-all duration-200 ${
                  isDragging ? "border-brand-purple bg-brand-lavender/30" : "border-brand-charcoal/15 hover:border-brand-purple/40 hover:bg-brand-lavender/10"
                }`}
                onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}
                onClick={() => fileInputRef.current?.click()}
                role="button" tabIndex={0} aria-label="Upload file"
                onKeyDown={e => e.key==="Enter" && fileInputRef.current?.click()}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-card flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
                    <path d="M15 20V8M10 13l5-5 5 5" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 24h18" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text-center px-2">
                  <p className="font-display font-semibold text-brand-charcoal text-sm sm:text-base mb-1">
                    {isDragging ? "Release to upload" : "Drop your file here"}
                  </p>
                  <p className="text-brand-muted text-xs sm:text-sm">
                    or <span className="text-brand-purple font-semibold">tap to browse</span> · .txt .md .log
                  </p>
                </div>
                <input ref={fileInputRef} type="file" accept=".txt,.md,.log,.text,.csv"
                  onChange={e => readFile(e.target.files[0])} className="hidden" aria-hidden="true"/>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-brand-lavender/30 border border-brand-purple/15 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                      <rect x="3" y="2" width="12" height="14" rx="2" stroke="#8B5CF6" strokeWidth="1.5"/>
                      <path d="M6 6h6M6 9h6M6 12h4" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-xs sm:text-sm text-brand-charcoal truncate max-w-[160px] sm:max-w-[260px]">{file.name}</p>
                    <p className="text-xs text-brand-muted">{formatBytes(file.size)} · {fileContent.split("\n").length.toLocaleString()} lines</p>
                  </div>
                </div>
                <button onClick={handleReset} className="text-xs text-brand-muted hover:text-red-500 transition-colors font-medium px-3 py-1.5 rounded-pill hover:bg-red-50 flex-shrink-0 touch-manipulation">
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Step 2 */}
          <div className={`mb-6 sm:mb-8 transition-opacity duration-300 ${file ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-charcoal flex items-center justify-center text-white text-xs font-bold flex-shrink-0">2</span>
              <h3 className="font-display font-bold text-base sm:text-lg text-brand-charcoal flex-1">How many chunks?</h3>
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-brand-purple">{numChunks}</span>
            </div>
            <input type="range" min={2} max={100} value={numChunks}
              onChange={e => { setNumChunks(Number(e.target.value)); setChunks([]); }}
              style={sliderStyle} aria-label={`Chunks: ${numChunks}`}/>
            <div className="flex justify-between text-xs text-brand-muted mt-2 font-medium">
              <span>2</span>
              <span className="text-brand-charcoal/40 text-center hidden sm:block">
                {file && fileContent ? `≈ ${Math.ceil(fileContent.split("\n").length / numChunks).toLocaleString()} lines each` : ""}
              </span>
              <span>100</span>
            </div>
            {file && fileContent && (
              <p className="text-xs text-brand-charcoal/40 text-center mt-1 sm:hidden">
                ≈ {Math.ceil(fileContent.split("\n").length / numChunks).toLocaleString()} lines per chunk
              </p>
            )}
          </div>

          {/* Generate Button */}
          <div className={`transition-opacity duration-300 ${file ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
            <button onClick={handleGenerate} disabled={!file || isProcessing}
              className="btn-primary w-full text-sm sm:text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed">
              {isProcessing ? (
                <><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="32" strokeDashoffset="8"/>
                </svg>Splitting your file…</>
              ) : <>Generate {numChunks} Chunks →</>}
            </button>
          </div>

          {/* Results */}
          {chunks.length > 0 && (
            <div className="mt-8 sm:mt-10">
              {/* Header + Download All ZIP */}
              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 mb-5">
                <h3 className="font-display font-bold text-base sm:text-lg text-brand-charcoal">
                  ✅ {chunks.length} chunks ready
                </h3>
                <button onClick={handleDownloadZip} disabled={isZipping}
                  className="btn-primary text-xs px-4 sm:px-5 py-2.5 w-full xs:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
                  {isZipping ? (
                    <><svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="32" strokeDashoffset="8"/>
                    </svg>Creating ZIP…</>
                  ) : <>⬇ Download All as ZIP</>}
                </button>
              </div>

              {/* Chunk grid — 1 col mobile, 2 col sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 sm:mb-6">
                {chunks.map(chunk => (
                  <div key={chunk.index} className="chunk-card p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-brand-purple/15 flex items-center justify-center text-xs font-bold text-brand-purple flex-shrink-0">
                        {chunk.index}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-brand-charcoal">Chunk {chunk.index} of {chunks.length}</p>
                        <p className="text-xs text-brand-muted">{chunk.lines.toLocaleString()} lines · {formatBytes(chunk.chars)}</p>
                      </div>
                    </div>
                    <div className="text-xs text-brand-muted bg-white/60 rounded-xl p-2.5 mb-3 h-14 overflow-hidden relative">
                      <p className="leading-relaxed font-mono text-[10px] line-clamp-3">{chunk.content.slice(0,180)}…</p>
                      <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-white/60 to-transparent"/>
                    </div>
                    <button
                      onClick={() => downloadChunk(chunk.content, `${file.name.replace(/\.[^/.]+$/,"")}_chunk_${chunk.index}_of_${chunks.length}.txt`)}
                      className="btn-purple w-full text-xs py-2.5">
                      Download Chunk {chunk.index} ↓
                    </button>
                  </div>
                ))}
              </div>

              {/* Usage tip */}
              <div className="bg-brand-peach/60 border border-orange-100 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <p className="text-xs font-bold text-brand-charcoal mb-1.5">💡 How to use these chunks</p>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Open a new AI chat and say: <em>"I'll share my previous conversation in {chunks.length} parts. Please read each part and confirm before I send the next one."</em> Then paste each chunk in order.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
