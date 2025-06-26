import { AnimatePresence } from "framer-motion";
import SceneItem from "./scene-item";

interface Scene {
  id: number;
  code: string;
}

interface SceneListProps {
  scenes: Scene[];
  removeScene: (id: number) => void;
}

export default function SceneList({ scenes, removeScene }: SceneListProps) {
  return (
    <div className="flex gap-4 flex-nowrap">
      <AnimatePresence>
        {scenes.map((scene, index) => (
          <SceneItem
            key={scene.id}
            scene={scene}
            sceneNumber={index + 1}
            onDelete={removeScene}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
