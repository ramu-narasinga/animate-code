"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Download, Info } from "lucide-react";

// 👇 Pass the same title you use in preview
export function ExportDialog({ triggerText = "Export", title = "My Default Title" }: { triggerText?: string, title?: string }) {
  const [format, setFormat] = useState("mp4");
  const [resolution, setResolution] = useState("720p");
  const [quality, setQuality] = useState("high");
  const [emailChecked, setEmailChecked] = useState(false);
  const [isRendering, setIsRendering] = useState(false);

  const handleRender = async () => {
    setIsRendering(true);

    try {
      const res = await fetch("http://localhost:4000/render", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          compositionId: "Main", // ✅ must match registered composition ID
          inputProps: {
            title: title, // ✅ same as in <Player />
          },
        }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Rendered video path:", data.outputPath);
      } else {
        console.error("Render failed:", data.error);
      }
    } catch (error) {
      console.error("Error rendering video:", error);
    } finally {
      setIsRendering(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="w-[900px] h-[600px] flex flex-col justify-between">
        <div className="space-y-5">
          <DialogHeader>
            <DialogTitle>Render video</DialogTitle>
            <DialogDescription>
              Select your desired resolution and compression level
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-lg border border-border bg-muted p-4">
            <div className="flex items-start gap-3">
              <Info className="text-gray-500 mt-0.5" size={20} />
              <div className="text-sm">
                <p className="font-medium">Heads up!</p>
                <p className="text-muted-foreground">
                  Some settings are not available since you are not on a Premium plan.
                </p>
                <Button variant="secondary" size="sm" className="mt-3">
                  Unlock all features →
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="font-medium text-muted-foreground">Export as</p>
              <Tabs value={format} onValueChange={setFormat}>
                <TabsList className="grid grid-cols-4 gap-1">
                  <TabsTrigger value="mp4">MP4</TabsTrigger>
                  <TabsTrigger value="gif">GIF</TabsTrigger>
                  <TabsTrigger value="webm">Webm</TabsTrigger>
                  <TabsTrigger value="prores">ProRes</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-muted-foreground">Resolution</p>
              <Tabs value={resolution} onValueChange={setResolution}>
                <TabsList className="grid grid-cols-3 gap-1">
                  <TabsTrigger value="720p">720p</TabsTrigger>
                  <TabsTrigger value="1080p">1080p</TabsTrigger>
                  <TabsTrigger value="4k">4k</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-muted-foreground">Quality (Compression level)</p>
            <Tabs value={quality} onValueChange={setQuality}>
              <TabsList className="grid grid-cols-3 gap-1">
                <TabsTrigger value="high">High</TabsTrigger>
                <TabsTrigger value="medium">Medium</TabsTrigger>
                <TabsTrigger value="low">Low</TabsTrigger>
              </TabsList>
            </Tabs>
            <p className="text-sm text-muted-foreground">
              Highest quality, best for editing in other programs.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="email"
              checked={emailChecked}
              onCheckedChange={(checked) => setEmailChecked(!!checked)}
            />
            <label htmlFor="email" className="text-sm space-y-1 leading-none">
              <p className="font-medium">Send me an email when my video is ready</p>
              <p className="text-muted-foreground">
                You’ll get an email with your download link once it’s done rendering.
              </p>
            </label>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="default"
            onClick={handleRender}
            disabled={isRendering}
          >
            <Download className="mr-2 h-4 w-4" />
            {isRendering ? "Rendering..." : "Render"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
