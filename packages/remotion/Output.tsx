// import React from "react";
// import { useCurrentFrame, Sequence } from "remotion";
// // Commented out because files are missing
// // import { SoundVisualization } from '../templates/visualizations/SoundVisualization';
// // import { TypeText } from '../templates/TypeText/TypeText';
// // import { TextTransition } from '../templates/TextTransition/TextTransition';
// // import { TextImage } from '../templates/TextImage/TextImage';
// // import RenderProperties from '../interfaces/RenderProperties';

// export const Output: React.FC = () => {
//   const frame = useCurrentFrame();

//   return (
//     <div>
//       <Sequence from={0} durationInFrames={150}>
//         <h1 style={{ fontSize: 60 }}>Output placeholder</h1>
//       </Sequence>
//     </div>
//   );
// };
import { AbsoluteFill, useVideoConfig } from "remotion";

export const Output = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 60,
        backgroundColor: "white",
      }}
    >
      This {width}x{height}px video is {durationInFrames / fps} seconds long.
      Karthik is Gay!!
    </AbsoluteFill>
  );
};
