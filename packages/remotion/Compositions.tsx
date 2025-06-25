import React from "react";
import { Composition } from "remotion";
import { Output } from "./Output";
import { Main } from "./MyComp/Main";
import { Video } from "./animate-code/video";
import { Block, HighlightedCodeBlock, parseRoot } from "codehike/blocks";
import Content from "./content.md";
import { z } from "zod";

const { steps, videoTitle } = parseRoot(
  Content,
  Block.extend({
    videoTitle: z.string(),
    steps: z.array(
      Block.extend({
        code: HighlightedCodeBlock,
        duration: z.string().transform((v) => parseInt(v, 10)),
        title: z.string(),
      })
    ),
  })
);

export const Compositions: React.FC = () => {
  // return (
  //   <>
  //     <Composition
  //       id="Output"
  //       component={Video}
  //       durationInFrames={150}
  //       fps={30}
  //       width={1920}
  //       height={1080}
  //     />
  //   </>
  // );
  const duration = steps.reduce((acc, step) => acc + step.duration, 0);

  console.log("steps", JSON.stringify(steps), "videoTitle", videoTitle);

  return (
    <Composition
      id="Output"
      component={Video}
      defaultProps={{ steps, videoTitle }}
      durationInFrames={duration}
      fps={60}
      width={780}
      height={900}
    />
  );
};
