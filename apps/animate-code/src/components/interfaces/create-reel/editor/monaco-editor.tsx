"use client";

import React from "react";
import Image from "next/image";
import CodeMirror from "@uiw/react-codemirror";
import { Extension } from "@codemirror/state";
import { Card } from "@/src/components/ui/card"; // Import custom Card
import Header from "@/src/components/interfaces/create-reel/editor/header";

interface MonacoEditorProps {
  code: string;
  setCode: (value: string) => void;
  language: string; // Add language here
  setLanguage: (value: string) => void;
  extension: Extension;
  onAddToTimeline: () => void;
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({
  code,
  setCode,
  language, // Use language prop here
  setLanguage,
  extension,
  onAddToTimeline,
}) => {
  return (
    <Card className="flex-1 overflow-auto mx-4 mb-4">
      <div className="h-full">
        <CodeMirror
          value={code}
          height="100%"
          extensions={[extension]}
          onChange={(value) => setCode(value)}
          theme="light"
        />
      </div>
    </Card>
  );
};

export default MonacoEditor;
