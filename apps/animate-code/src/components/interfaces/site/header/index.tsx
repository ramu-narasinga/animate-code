"use client";

import { Button } from "@/src/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/create-reel/Thinkthroo.svg"
            alt="Logo"
            width={32}
            height={32}
          />

          <Link href="/create-reel">
            <Button variant="ghost" className="flex gap-2">
              <Image
                src="/create-reel/add.svg"
                alt="Add"
                width={16}
                height={16}
              />
              Create
            </Button>
          </Link>

          <Link href="/renders">
            <Button variant="ghost" className="flex gap-2">
              <Image
                src="/create-reel/video.svg"
                alt="Video"
                width={16}
                height={16}
              />
              Renders
            </Button>
          </Link>

          <Link href="/settings">
            <Button variant="ghost" className="flex gap-2">
              <Image
                src="/create-reel/settings.svg"
                alt="Settings"
                width={16}
                height={16}
              />
              Settings
            </Button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Button variant="outline">Upgrade to pro</Button>

          <Avatar>
            <AvatarImage src="/create-reel/Group.svg" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
