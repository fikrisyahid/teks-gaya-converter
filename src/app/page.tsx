"use client";

import { useState, useEffect } from "react";
import {
  Trash2,
  Wand2,
  Copy,
  Github,
  Facebook,
  Smile,
  Check,
} from "lucide-react";
import { bapackConverter, jametConverter } from "@/utils/converter";

export default function TextConverter() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [mode, setMode] = useState<"bapack" | "jamet">("bapack");
  const [copied, setCopied] = useState(false);

  // Reset copied state after 2 seconds
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [copied]);

  const handleConvert = () => {
    if (!inputText) return;
    switch (mode) {
      case "bapack":
        setOutputText(bapackConverter(inputText));
        break;
      case "jamet":
        setOutputText(jametConverter(inputText));
        break;
    }
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
  };

  const copyToClipboard = () => {
    if (outputText) {
      navigator.clipboard.writeText(outputText);
      setCopied(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#111827] p-4">
      <div className="w-full max-w-xl rounded-lg bg-[#1f2937] p-8 shadow-md">
        <h1 className="text-2xl font-semibold text-white">
          Text Style Converter
        </h1>
        <p className="text-[#9ca3af] mb-4">
          Transform your text with various conversion methods
        </p>

        <div className="mb-4">
          <label
            htmlFor="mode"
            className="mb-2 block text-sm font-medium text-[#e5e7eb]"
          >
            Select Conversion Mode
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className={`flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm ${
                mode === "bapack"
                  ? "bg-[#1e40af] text-[#bfdbfe]"
                  : "bg-[#374151] text-[#9ca3af]"
              }`}
              onClick={() => setMode("bapack")}
            >
              <Smile className="h-4 w-4" />
              Bapack2
            </button>
            <button
              type="button"
              className={`flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm ${
                mode === "jamet"
                  ? "bg-[#1e40af] text-[#bfdbfe]"
                  : "bg-[#374151] text-[#9ca3af]"
              }`}
              onClick={() => setMode("jamet")}
            >
              <Facebook className="h-4 w-4" />
              Jamet FB
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="input"
            className="mb-2 block text-sm font-medium text-[#e5e7eb]"
          >
            Input Text
          </label>
          <textarea
            id="input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="min-h-[120px] w-full rounded-md border border-[#4b5563] bg-[#374151] p-3 text-[#e5e7eb] focus:border-[#2563eb] focus:outline-none focus:ring-1 focus:ring-[#2563eb] placeholder:text-[#6b7280]"
          />
        </div>

        <div className="mb-4 flex justify-between">
          <button
            type="button"
            className="flex items-center gap-2 rounded-md border border-[#4b5563] bg-[#374151] px-4 py-2 text-sm text-[#e5e7eb] hover:bg-[#4b5563]"
            onClick={handleClear}
          >
            <Trash2 className="h-4 w-4" />
            Clear
          </button>
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-2 rounded-md bg-[#3b82f6] px-4 py-2 text-sm text-white hover:bg-[#2563eb]"
              onClick={handleConvert}
            >
              <Wand2 className="h-4 w-4" />
              Convert
            </button>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#374151] text-white text-xs rounded py-1 px-2 whitespace-nowrap">
              Click repeatedly for different results
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#374151]" />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="output"
            className="mb-2 block text-sm font-medium text-[#e5e7eb]"
          >
            Result
          </label>
          <div className="relative">
            <textarea
              id="output"
              value={outputText}
              readOnly
              placeholder="Converted text will appear here..."
              className="min-h-[120px] w-full rounded-md border border-[#4b5563] bg-[#374151] p-3 text-[#e5e7eb] placeholder:text-[#6b7280]"
            />
            {outputText && (
              <div className="relative group">
                <button
                  type="button"
                  className="absolute bottom-3 right-2 h-8 w-8 rounded-md p-0 text-[#6b7280] hover:bg-[#4b5563] hover:text-[#e5e7eb] flex items-center justify-center"
                  onClick={copyToClipboard}
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="sr-only">Copy to clipboard</span>
                </button>
                <div
                  className={`absolute bottom-12 ${
                    copied ? "-right-1" : "-right-8"
                  } hidden group-hover:block bg-[#374151] text-white text-xs rounded py-1 px-2 whitespace-nowrap`}
                >
                  {copied ? "Copied!" : "Copy to clipboard"}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#374151]" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://github.com/yourusername/text-converter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#9ca3af] hover:text-[#60a5fa] transition-colors"
          >
            <Github className="h-4 w-4" />
            View source code
          </a>
        </div>
      </div>
    </div>
  );
}
