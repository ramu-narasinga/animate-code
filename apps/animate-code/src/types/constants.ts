import { z } from "zod";

export const COMP_NAME = "MyComp";

// ✅ Update CompositionProps to match what <Video /> expects
export const CompositionProps = z.object({
  videoTitle: z.string(),
  steps: z.array(
    z.object({
      title: z.string(),
      code: z.string(),
      duration: z.number(),
    })
  ),
});

// ✅ Default props for preview/demo
export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  videoTitle: "Next.js and Remotion",
  steps: [
    {
      title: "Intro Step",
      code: `console.log("Hello from ThinkThroo!");`,
      duration: 150,
    },
  ],
};

export const DURATION_IN_FRAMES = 200;
export const VIDEO_WIDTH = 1280;
export const VIDEO_HEIGHT = 720;
export const VIDEO_FPS = 30;
