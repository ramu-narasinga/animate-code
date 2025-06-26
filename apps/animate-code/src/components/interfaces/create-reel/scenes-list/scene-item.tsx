"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

interface Scene {
  id: number;
  code: string;
}

interface SceneItemProps {
  scene: Scene;
  sceneNumber: number;
  onDelete: (id: number) => void;
}

export default function SceneItem({
  scene,
  sceneNumber,
  onDelete,
}: SceneItemProps) {
  return (
    <motion.div
      key={scene.id}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className="flex-shrink-0"
    >
      <Card className="w-[400px] h-[400px] shadow-sm mb-4">
        <CardHeader className="flex items-center justify-between px-3 py-0 h-10 border-b">
          <CardTitle className="text-md font-medium leading-none">
            Scene {sceneNumber}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(scene.id)}
            className="hover:bg-gray-100 rounded h-6 w-6 p-0"
          >
            <Image
              src="/create-reel/icon-cancel.svg"
              alt="Close"
              width={16}
              height={16}
            />
          </Button>
        </CardHeader>

        <CardContent>
          <div className="h-60 bg-gray-100 rounded mt-2 relative">
            <div
              contentEditable
              className="w-[350px] h-[250px] bg-white border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded shadow-sm p-2 text-gray-800 focus:outline-none"
              dangerouslySetInnerHTML={{ __html: scene.code }}
            />
          </div>

          <Button
            variant="outline"
            className="mt-4 w-full text-sm flex gap-2 justify-center items-center"
          >
            <Image
              src="/create-reel/edit icon.svg"
              alt="Edit Icon"
              width={16}
              height={16}
            />
            Edit
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
