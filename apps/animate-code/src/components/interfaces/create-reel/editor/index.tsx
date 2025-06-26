"use client";

import Image from "next/image";
import Header from "./header";
import MonacoEditor from "./monaco-editor";
import { Button } from "@/src/components/ui/button";

export function Editor({
  language,
  setLanguage,
  onAddToTimeline,
  code,
  setCode,
  extension,
}) {
  return (
    <div className="bg-gray-100 h-full flex flex-col rounded-l-none shadow-none border-r border-gray-300">
      {/* Toolbar */}
      <div className="w-full mb-2 px-4 pt-4">
        <Header
          language={language}
          setLanguage={setLanguage}
          onDelete={() => {}}
        />
      </div>

      <MonacoEditor code={code} setCode={setCode} extension={extension} />

      <div className="flex justify-end p-4">
        <Button
          className="flex items-center gap-2 px-4 py-2 text-md text-black rounded-md bg-white hover:bg-gray-100"
          onClick={onAddToTimeline}
        >
          <Image
            src="/create-reel/timeline.svg"
            alt="Timeline Icon"
            width={18}
            height={18}
          />
          Add code to timeline
        </Button>
      </div>
    </div>
  );
}
