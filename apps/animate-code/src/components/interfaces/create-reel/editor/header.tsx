"use client";

import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import Image from "next/image";

interface EditorHeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
  onDelete?: () => void;
}

export default function Header({
  language,
  setLanguage,
  onDelete,
}: EditorHeaderProps) {
  return (
    <div className="w-[580px] mb-2 px-1 pt-1">
      <div className="bg-white border rounded flex items-center justify-between px-4 py-2 w-full">
        {/* Language Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm"
            >
              <Image
                src="/create-reel/side arrow.svg"
                alt="Side Arrow"
                width={12}
                height={12}
              />
              <span className="uppercase">{language}</span>
              <Image
                src="/create-reel/top arrow.svg"
                alt="Top Arrow"
                width={12}
                height={12}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {["tsx", "jsx", "html", "js"].map((lang) => (
              <DropdownMenuItem key={lang} onClick={() => setLanguage(lang)}>
                {lang}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Delete Button */}
        {onDelete && (
          <Button variant="outline" onClick={onDelete} className="ml-2">
            <Image
              src="/create-reel/delete.svg"
              alt="Delete Icon"
              width={16}
              height={16}
            />
          </Button>
        )}
      </div>
    </div>
  );
}
