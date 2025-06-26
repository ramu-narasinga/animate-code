import { useCurrentFrame } from "remotion";
import React from "react";

export function ProgressBar({
  steps = [],
}: {
  steps?: { duration: number; title: string }[];
}) {
  const frame = useCurrentFrame();

  if (!Array.isArray(steps) || steps.length === 0) {
    return null; // Or return a fallback UI like <div>Loading...</div>
  }

  let currentStart = 0;
  let currentIndex = 0;
  let nextStart = steps[0]?.duration ?? 0;

  while (
    currentIndex < steps.length - 1 &&
    nextStart <= frame &&
    steps[currentIndex + 1]
  ) {
    currentIndex++;
    currentStart = nextStart;
    nextStart += steps[currentIndex]?.duration ?? 0;
  }

  const currentDuration = steps[currentIndex]?.duration ?? 1;
  const currentStepProgress = (frame - currentStart) / currentDuration;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 36,
        left: 120,
        right: 120,
        display: "flex",
        gap: 6,
      }}
    >
      {steps.map(({ title, duration }, index) => {
        const isCurrent = index === currentIndex;
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flex: duration,
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            {/* Optional title display */}
            {/* <div
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: 26,
                color: isCurrent ? "#fff" : "#fffa",
              }}
            >
              {title}
            </div> */}
            <div
              style={{
                backgroundColor: "#fff2",
                borderRadius: 6,
                overflow: "hidden",
                height: 10,
                width: "100%",
              }}
            >
              <div
                style={{
                  height: "100%",
                  backgroundColor: "#fffb",
                  borderRadius: 6,
                  width:
                    index > currentIndex
                      ? "0%"
                      : isCurrent
                      ? `${Math.min(currentStepProgress * 100, 100)}%`
                      : "100%",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
