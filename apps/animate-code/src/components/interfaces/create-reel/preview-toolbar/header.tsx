"use client";

import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { ExportDialog } from "./ExportDialog"; // Adjust path if needed

export default function Header() {
  return (
    <div className="w-half flex items-center justify-between border rounded px-4 py-2 m-2 bg-white shadow-sm">
      <div className="flex items-center space-x-3">
        {/* Font Selector */}
        <div className="relative group">
          <Button variant="outline" className="w-[120px]">Fira Mono</Button>
          <div className="absolute hidden group-hover:block bg-white border rounded mt-1 z-10 w-full">
            <Button variant="ghost" className="w-full justify-start">Roboto Mono</Button>
            <Button variant="ghost" className="w-full justify-start">Courier</Button>
          </div>
        </div>

        {/* Font Size Selector */}
        <div className="relative group">
          <Button variant="outline" className="w-[80px]">A 32</Button>
          <div className="absolute hidden group-hover:block bg-white border rounded mt-1 z-10 w-full px-4 py-2">
            <Input type="number" min={1} max={100} defaultValue={32} />
          </div>
        </div>

        {/* Theme Selector */}
        <div className="relative group">
          <Button variant="outline" className="flex gap-2 w-[140px]">
            <Image src="/create-reel/paint.svg" alt="Paint" width={16} height={16} />
            dracula-soft
          </Button>
          <div className="absolute hidden group-hover:block bg-white border rounded mt-1 z-10 w-full">
            <Button variant="ghost" className="w-full justify-start">dracula</Button>
            <Button variant="ghost" className="w-full justify-start">monokai</Button>
          </div>
        </div>

        {/* Wallpaper Selector */}
        <div className="relative group">
          <Button variant="outline" className="w-[150px]">Select wallpaper</Button>
          <div className="absolute hidden group-hover:block bg-white border rounded mt-1 z-10 w-full">
            <Button variant="ghost" className="w-full justify-start">Mountains</Button>
            <Button variant="ghost" className="w-full justify-start">City</Button>
          </div>
        </div>

        {/* Settings */}
        <Button variant="outline" size="icon">
          <Image src="/create-reel/settings.svg" alt="Settings" width={16} height={16} />
        </Button>
      </div>

      {/* Export Dialog Trigger */}
      <div className="ml-4">
        <ExportDialog />
      </div>
    </div>
  );
}
