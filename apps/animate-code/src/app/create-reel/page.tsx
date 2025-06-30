"use client";

import Image from "next/image";
import SiteHeader from "@/src/components/interfaces/site/header";
import React, { useState } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { Editor } from "@/src/components/interfaces/create-reel/editor";
import SceneList from "@/src/components/interfaces/create-reel/scenes-list";
import RightPanel from "@/src/components/interfaces/create-reel/preview-toolbar";

interface Scene {
  id: number;
  code: string;
}

export default function FigmaUIClone() {
  const [language, setLanguage] = useState("tsx");
  const [code, setCode] = useState(`// Example code
function greet(name) {
  return "Hello, " + name; 
}
  console.log("hello");
console.log(greet("World"));`);
  const [leftPanelWidth, setLeftPanelWidth] = useState(40); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const [scenes, setScenes] = useState<Scene[]>([{ id: 1, code }]);
  const [nextId, setNextId] = useState(2);
  const [previewCode, setPreviewCode] = useState(code); // <- NEW

  const getExtension = () => {
    switch (language) {
      case "html":
        return html();
      case "jsx":
        return javascript({ jsx: true });
      case "tsx":
        return javascript({ jsx: true, typescript: true });
      case "js":
      default:
        return javascript();
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const newLeftWidth = (e.clientX / window.innerWidth) * 100;
    if (newLeftWidth > 20 && newLeftWidth < 80) {
      setLeftPanelWidth(newLeftWidth);
    }
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const addCodeToTimeline = () => {
    const newScene = { id: nextId, code };
    setScenes((prev) => [...prev, newScene]);
    setNextId((prev) => prev + 1);
    setPreviewCode(code); // <- NEW: Set preview code on add
  };

  const removeScene = (sceneId: number) => {
    setScenes((prev) => prev.filter((scene) => scene.id !== sceneId));
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <SiteHeader />

      <div className="flex flex-col gap-4">
        <div className="flex flex-row w-full h-[500px] overflow-hidden">
          <div style={{ width: `${leftPanelWidth}%` }} className="h-full">
            <Editor
              code={code}
              setCode={setCode}
              language={language}
              setLanguage={setLanguage}
              extension={getExtension()}
              onAddToTimeline={addCodeToTimeline}
            />
          </div>
          <div
            className="cursor-col-resize w-1 bg-gray-300 hover:bg-gray-500 transition-colors"
            onMouseDown={handleMouseDown}
          />
          <div style={{ width: `${100 - leftPanelWidth}%` }} className="h-full">
            <RightPanel code={previewCode} />
          </div>
        </div>

        <div className="overflow-x-auto px-4">
          <SceneList scenes={scenes} removeScene={removeScene} />
        </div>
      </div>
    </div>
  );
}
